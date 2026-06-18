import { getCliClient } from 'sanity/cli';

// Simple command line argument parser
const args = process.argv.slice(2);
const getArg = (name: string) => {
  const prefix = `--${name}=`;
  const found = args.find(a => a.startsWith(prefix));
  return found ? found.substring(prefix.length) : null;
};

const hasFlag = (name: string) => args.includes(`--${name}`);

const targetId = getArg('id');
const targetName = getArg('name');
const commit = hasFlag('commit');

const client = getCliClient();

function findPaths(obj: any, targetId: string, path: string = ''): string[] {
  const paths: string[] = [];
  
  if (!obj || typeof obj !== 'object') {
    return paths;
  }
  
  if (Array.isArray(obj)) {
    obj.forEach((item, index) => {
      if (item && typeof item === 'object') {
        if (item._ref === targetId) {
          if (item._key) {
            paths.push(`${path}[_key == "${item._key}"]`);
          } else {
            paths.push(`${path}[_ref == "${targetId}"]`);
          }
        } else {
          paths.push(...findPaths(item, targetId, `${path}[${index}]`));
        }
      }
    });
  } else {
    for (const key of Object.keys(obj)) {
      // Skip system fields starting with underscore (except _key, _ref)
      if (key.startsWith('_') && key !== '_key' && key !== '_ref') {
        continue;
      }
      
      const val = obj[key];
      if (val && typeof val === 'object') {
        if (val._ref === targetId) {
          paths.push(path ? `${path}.${key}` : key);
        } else {
          paths.push(...findPaths(val, targetId, path ? `${path}.${key}` : key));
        }
      }
    }
  }
  
  return paths;
}

async function run() {
  console.log('🔍 Executing delete-product script...\n');

  let docToDelete: { _id: string; name?: string; _type: string } | null = null;

  if (targetId) {
    docToDelete = await client.fetch(`*[_id == $id || _id == "drafts." + $id][0]{ _id, name, _type }`, { id: targetId });
  } else if (targetName) {
    const matches = await client.fetch(
      `*[_type == "product" && (name match $name || synonyms match $name)]{ _id, name, _type }`,
      { name: targetName }
    );
    
    if (matches.length === 0) {
      console.error(`❌ Error: No product found matching name "${targetName}"`);
      process.exit(1);
    } else if (matches.length > 1) {
      console.log(`⚠️ Multiple matches found for name "${targetName}":`);
      matches.forEach((m: any) => console.log(`  - ID: ${m._id} | Name: ${m.name}`));
      console.error('\nPlease rerun using the specific --id argument.');
      process.exit(1);
    }
    
    docToDelete = matches[0];
  } else {
    console.error('❌ Error: Please specify either --id="<id>" or --name="<product-name>"');
    console.log('\nUsage:');
    console.log('  npx sanity exec scripts/delete-product.ts --with-user-token -- --name="Ginseng Extract"');
    console.log('  npx sanity exec scripts/delete-product.ts --with-user-token -- --id="ginseng-extract-id" --commit');
    process.exit(1);
  }

  if (!docToDelete) {
    console.error(`❌ Error: Document not found.`);
    process.exit(1);
  }

  const id = docToDelete._id.replace('drafts.', ''); // Handle drafts too
  console.log(`🎯 Target Document: [${docToDelete._type}] "${docToDelete.name || 'Untitled'}" (ID: ${id})`);

  // Find both published and draft versions of referencing documents
  console.log('🔗 Scanning for documents referencing this ID...');
  const referencingDocs = await client.fetch(
    `*[references($id)]`,
    { id }
  );

  if (referencingDocs.length === 0) {
    console.log('✅ No active references found. Document can be deleted directly.');
    if (commit) {
      console.log('🗑️ Deleting document...');
      await client.delete(`drafts.${id}`);
      await client.delete(id);
      console.log('✨ Document deleted successfully!');
    } else {
      console.log('\n👉 Run with --commit to perform the deletion.');
    }
    return;
  }

  console.log(`\nFound ${referencingDocs.length} referencing document(s):`);
  const patches: { id: string; unsetPaths: string[] }[] = [];

  for (const doc of referencingDocs) {
    const unsetPaths = findPaths(doc, id);
    if (unsetPaths.length > 0) {
      console.log(`  - [${doc._type}] "${doc.name || doc.title || 'Untitled'}" (ID: ${doc._id})`);
      unsetPaths.forEach(p => console.log(`      ↳ Will remove reference at path: ${p}`));
      patches.push({ id: doc._id, unsetPaths });
    }
  }

  if (commit) {
    console.log('\n⚡ Unbinding references and deleting target product...');
    const tx = client.transaction();

    // Patch referencing documents to remove references
    for (const patch of patches) {
      tx.patch(patch.id, {
        unset: patch.unsetPaths
      });
    }

    // Delete both published and draft versions of the target product
    tx.delete(`drafts.${id}`);
    tx.delete(id);

    await tx.commit();
    console.log('🎉 Successfully removed all references and deleted the product!');
  } else {
    console.log('\n🔬 DRY RUN: No changes were written to the database.');
    console.log('👉 Add --commit to the command to run the actual deletion.');
    console.log('\nExample command:');
    console.log(`  npx sanity exec scripts/delete-product.ts --with-user-token -- --id="${id}" --commit`);
  }
}

run().catch((err) => {
  console.error('❌ Error executing script:', err);
  process.exit(1);
});
