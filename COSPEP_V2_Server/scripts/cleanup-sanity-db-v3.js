const { createClient } = require('@sanity/client');

const client = createClient({
    projectId: 'lxm1elmu',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2024-01-01',
    token: 'skWisNlu0HqHAno6Cc2fF60uDewNKHGO4kypb2oKrq8ifflhrKTbFLolC3Zh6HDhs716wcnGZ7B9b4e8VleTbOQyIUKUtD8jB7n5lwP5YwwZiqcbQKRBKxDAkXRUrs0WWlC9qSmoZPVgu3ujajOU0Yr4wtcv8a741laD5UBgmguV5GbS8lVo',
});

async function run() {
    console.log('🚀 Starting Sanity database cleanup v3...\n');

    // 1. Fetch categories
    const categories = await client.fetch(`*[_type == "category"] { _id, title, parentCategory }`);
    const peptideCategoryIds = new Set(categories.filter(c => c.parentCategory === 'peptides').map(c => c._id));
    const nonPeptideCategories = categories.filter(c => c.parentCategory !== 'peptides');
    const nonPeptideCategoryIds = nonPeptideCategories.map(c => c._id);
    const nonPeptideCategoryIdsSet = new Set(nonPeptideCategoryIds);

    // 2. Fetch products to identify which ones to delete
    const products = await client.fetch(`*[_type == "product"] { _id, name, categories }`);
    const toDeleteSet = new Set();
    const toKeepSet = new Set();

    products.forEach(p => {
        const refs = p.categories || [];
        const peptideRefs = refs.filter(r => peptideCategoryIds.has(r._ref));
        
        // Base ID (without drafts.)
        const baseId = p._id.replace('drafts.', '');

        if (peptideRefs.length === 0) {
            toDeleteSet.add(p._id);
            toDeleteSet.add(`drafts.${baseId}`);
            // Also include versions.agent-... if any exist
        } else {
            toKeepSet.add(p._id);
        }
    });

    console.log(`Identified ${toDeleteSet.size} documents (including drafts) to be deleted.`);
    console.log(`Identified ${toKeepSet.size} products to be kept.`);

    // --- PHASE 1: Clean up recommendedProducts references to deleted products ---
    console.log('\n--- PHASE 1: Cleaning up product-to-product references ---');
    const productsWithRecs = await client.fetch(`*[_type == "product" && defined(recommendedProducts)] { _id, name, recommendedProducts }`);
    const phase1Tx = client.transaction();
    let phase1Count = 0;

    for (const p of productsWithRecs) {
        // If this product itself is being deleted, skip patching it
        if (toDeleteSet.has(p._id)) continue;

        const recs = p.recommendedProducts || [];
        // Filter out references to deleted products
        const updatedRecs = recs.filter(r => !toDeleteSet.has(r._ref) && !toDeleteSet.has(`drafts.${r._ref.replace('drafts.', '')}`));

        if (updatedRecs.length < recs.length) {
            console.log(`- Patching recommendedProducts for "${p.name}" (ID: ${p._id}) - keeping ${updatedRecs.length}/${recs.length}`);
            phase1Tx.patch(p._id, {
                set: { recommendedProducts: updatedRecs }
            });
            phase1Count++;
        }
    }

    // Also scan all other documents referencing the products to delete
    const allRefsToDeletedProducts = await client.fetch(`*[references($ids)] { _id, _type, name, title, recommendedProducts }`, { ids: Array.from(toDeleteSet) });
    for (const doc of allRefsToDeletedProducts) {
        if (toDeleteSet.has(doc._id)) continue;

        // If it's a version history document (e.g. versions.agent-...) that references a deleted product, let's delete it too!
        if (doc._id.startsWith('versions.agent-') || doc._id.startsWith('04bee5c0-32b8-4988-89bc-217659f48c30')) {
            console.log(`- Deleting referencing version/history doc: ${doc._id}`);
            phase1Tx.delete(doc._id);
            phase1Count++;
        } else if (doc.recommendedProducts) {
            const recs = doc.recommendedProducts || [];
            const updatedRecs = recs.filter(r => !toDeleteSet.has(r._ref));
            if (updatedRecs.length < recs.length) {
                console.log(`- Patching recommendedProducts for [${doc._type}] ${doc.name || doc.title} (ID: ${doc._id})`);
                phase1Tx.patch(doc._id, { set: { recommendedProducts: updatedRecs } });
                phase1Count++;
            }
        }
    }

    if (phase1Count > 0) {
        console.log(`⚡ Committing Phase 1 transaction (updated/removed ${phase1Count} product references)...`);
        await phase1Tx.commit();
        console.log('✓ Phase 1 complete.');
    } else {
        console.log('No product-to-product references to clean up.');
    }

    // --- PHASE 2: Clean up category references and delete non-peptide products ---
    console.log('\n--- PHASE 2: Cleaning up category references & deleting products ---');
    
    // Fetch all referencing documents of the non-peptide categories again
    const allRefsToCategories = await client.fetch(`*[references($ids)] { _id, _type, name, title, categories }`, { ids: nonPeptideCategoryIds });
    const phase2Tx = client.transaction();
    let phase2DeleteCount = 0;
    let phase2PatchCount = 0;

    for (const doc of allRefsToCategories) {
        const isToDelete = toDeleteSet.has(doc._id) || doc._id.startsWith('versions.agent-') || doc._id.startsWith('04bee5c0-32b8-4988-89bc-217659f48c30');
        
        if (isToDelete) {
            console.log(`- Deleting [${doc._type}] ${doc.name || doc.title || 'Untitled'} (ID: ${doc._id})`);
            phase2Tx.delete(doc._id);
            phase2DeleteCount++;
        } else {
            const refs = doc.categories || [];
            const peptideRefs = refs.filter(r => peptideCategoryIds.has(r._ref));
            console.log(`- Patching [${doc._type}] ${doc.name || doc.title || 'Untitled'} (ID: ${doc._id}) to keep ${peptideRefs.length}/${refs.length} categories`);
            phase2Tx.patch(doc._id, {
                set: { categories: peptideRefs }
            });
            phase2PatchCount++;
        }
    }

    // Delete any remaining products in the deletion set that might not have been matched by references
    for (const deleteId of toDeleteSet) {
        try {
            // We can delete directly
            phase2Tx.delete(deleteId);
            phase2DeleteCount++;
        } catch (e) {}
    }

    console.log(`\nPhase 2 Summary: Deleting ${phase2DeleteCount} documents, Patching ${phase2PatchCount} documents.`);
    if (phase2DeleteCount > 0 || phase2PatchCount > 0) {
        console.log('⚡ Committing Phase 2 transaction...');
        await phase2Tx.commit();
        console.log('✓ Phase 2 complete.');
    } else {
        console.log('No products or references to delete/patch in Phase 2.');
    }

    // --- PHASE 3: Delete non-peptide categories ---
    console.log('\n--- PHASE 3: Deleting non-peptide categories ---');
    const phase3Tx = client.transaction();
    nonPeptideCategories.forEach(c => {
        console.log(`- Deleting category: ${c.title} (ID: ${c._id})`);
        phase3Tx.delete(c._id);
    });
    console.log('⚡ Committing Phase 3 transaction...');
    await phase3Tx.commit();
    console.log('✓ Phase 3 complete.');

    console.log('\n🎉 Sanity database cleanup v3 successfully completed!');
}

run().catch(error => {
    console.error('❌ Error executing database cleanup:', error);
});
