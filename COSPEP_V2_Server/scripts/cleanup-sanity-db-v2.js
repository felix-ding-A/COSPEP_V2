const { createClient } = require('@sanity/client');

const client = createClient({
    projectId: 'lxm1elmu',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2024-01-01',
    token: 'skWisNlu0HqHAno6Cc2fF60uDewNKHGO4kypb2oKrq8ifflhrKTbFLolC3Zh6HDhs716wcnGZ7B9b4e8VleTbOQyIUKUtD8jB7n5lwP5YwwZiqcbQKRBKxDAkXRUrs0WWlC9qSmoZPVgu3ujajOU0Yr4wtcv8a741laD5UBgmguV5GbS8lVo',
});

async function run() {
    console.log('🚀 Starting Sanity database cleanup v2...\n');

    // 1. Fetch all categories
    const categories = await client.fetch(`*[_type == "category"] { _id, title, parentCategory }`);
    const peptideCategoryIds = new Set(categories.filter(c => c.parentCategory === 'peptides').map(c => c._id));
    const nonPeptideCategories = categories.filter(c => c.parentCategory !== 'peptides');
    const nonPeptideCategoryIds = nonPeptideCategories.map(c => c._id);
    const nonPeptideCategoryIdsSet = new Set(nonPeptideCategoryIds);

    console.log(`Found ${nonPeptideCategories.length} non-peptide categories:`);
    nonPeptideCategories.forEach(c => console.log(`  - [${c._id}] ${c.title}`));

    // 2. Fetch all documents that reference non-peptide categories
    console.log('\nScanning for all documents (including drafts and versions) referencing non-peptide categories...');
    const referencingDocs = await client.fetch(`*[references($ids)] { _id, _type, name, title, categories }`, { ids: nonPeptideCategoryIds });
    console.log(`Found ${referencingDocs.length} referencing documents.`);

    const tx1 = client.transaction();
    let deleteCount = 0;
    let patchCount = 0;

    for (const doc of referencingDocs) {
        const refs = doc.categories || [];
        const peptideRefs = refs.filter(r => peptideCategoryIds.has(r._ref));

        if (peptideRefs.length === 0) {
            // No peptide categories left, delete the document
            console.log(`- Queueing deletion of [${doc._type}] ${doc.name || doc.title || 'Untitled'} (ID: ${doc._id})`);
            tx1.delete(doc._id);
            deleteCount++;
        } else {
            // Keep the product, patch to remove non-peptide references
            console.log(`- Queueing patch for [${doc._type}] ${doc.name || doc.title || 'Untitled'} (ID: ${doc._id})`);
            tx1.patch(doc._id, {
                set: { categories: peptideRefs }
            });
            patchCount++;
        }
    }

    console.log(`\nTransaction 1 Summary:`);
    console.log(`- Deleting ${deleteCount} referencing documents`);
    console.log(`- Patching ${patchCount} referencing documents`);

    if (deleteCount > 0 || patchCount > 0) {
        console.log('\n⚡ Committing Transaction 1 (Cleaning up references and non-peptide products)...');
        await tx1.commit();
        console.log('✓ Transaction 1 committed successfully.');
    } else {
        console.log('\nNo referencing documents to clean up.');
    }

    // 3. Delete non-peptide categories
    console.log(`\n⚡ Committing Transaction 2 (Deleting ${nonPeptideCategories.length} non-peptide categories)...`);
    const tx2 = client.transaction();
    nonPeptideCategories.forEach(c => {
        console.log(`- Deleting category: ${c.title} (ID: ${c._id})`);
        tx2.delete(c._id);
    });
    await tx2.commit();
    console.log('✓ Transaction 2 committed successfully.');

    console.log('\n🎉 Sanity database cleanup v2 successfully completed!');
}

run().catch(error => {
    console.error('❌ Error executing database cleanup:', error);
});
