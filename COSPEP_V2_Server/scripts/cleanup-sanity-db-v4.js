const { createClient } = require('@sanity/client');

const client = createClient({
    projectId: 'lxm1elmu',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2024-01-01',
    token: 'skWisNlu0HqHAno6Cc2fF60uDewNKHGO4kypb2oKrq8ifflhrKTbFLolC3Zh6HDhs716wcnGZ7B9b4e8VleTbOQyIUKUtD8jB7n5lwP5YwwZiqcbQKRBKxDAkXRUrs0WWlC9qSmoZPVgu3ujajOU0Yr4wtcv8a741laD5UBgmguV5GbS8lVo',
});

async function run() {
    console.log('🚀 Starting Sanity database cleanup v4...\n');

    // 1. Fetch categories
    const categories = await client.fetch(`*[_type == "category"] { _id, title, parentCategory }`);
    const peptideCategoryIds = new Set(categories.filter(c => c.parentCategory === 'peptides').map(c => c._id));
    const nonPeptideCategories = categories.filter(c => c.parentCategory !== 'peptides');
    const nonPeptideCategoryIds = nonPeptideCategories.map(c => c._id);
    const nonPeptideCategoryIdsSet = new Set(nonPeptideCategoryIds);

    // 2. Fetch all products and drafts
    const productsAndDrafts = await client.fetch(`*[_type == "product"] { _id, name, categories, recommendedProducts }`);
    const baseProductIds = Array.from(new Set(productsAndDrafts.map(p => p._id.replace('drafts.', ''))));

    // 3. Fetch all release documents (versions.agent-ZfFwD0.*)
    const releaseIds = baseProductIds.map(id => `versions.agent-ZfFwD0.${id}`);
    const releaseDocs = (await client.getDocuments(releaseIds)).filter(Boolean);

    console.log(`Fetched ${productsAndDrafts.length} published/draft products, and ${releaseDocs.length} release products.`);

    const allProductDocs = [...productsAndDrafts, ...releaseDocs];
    
    // Categorize documents
    const toDeleteDocs = [];
    const toKeepDocs = [];
    const toDeleteIdsSet = new Set();

    allProductDocs.forEach(doc => {
        const refs = doc.categories || [];
        const peptideRefs = refs.filter(r => peptideCategoryIds.has(r._ref));

        if (peptideRefs.length === 0) {
            toDeleteDocs.push(doc);
            toDeleteIdsSet.add(doc._id);
        } else {
            toKeepDocs.push(doc);
        }
    });

    console.log(`\nClassification:`);
    console.log(`- To Delete: ${toDeleteDocs.length} documents`);
    console.log(`- To Keep: ${toKeepDocs.length} documents`);

    // --- PHASE 1: Clean up recommendedProducts references ---
    console.log('\n--- PHASE 1: Cleaning up recommendedProducts references ---');
    const phase1Tx = client.transaction();
    let phase1Count = 0;

    toKeepDocs.forEach(doc => {
        const recs = doc.recommendedProducts || [];
        // Filter out references to deleted products (either standard ID, drafts, or versions)
        const updatedRecs = recs.filter(r => {
            const refId = r._ref;
            const baseRefId = refId.replace('drafts.', '').replace('versions.agent-ZfFwD0.', '');
            // Check if any variant of this reference is in the delete set
            const isRefDeleted = toDeleteIdsSet.has(refId) || 
                                 toDeleteIdsSet.has(`drafts.${baseRefId}`) ||
                                 toDeleteIdsSet.has(`versions.agent-ZfFwD0.${baseRefId}`) ||
                                 toDeleteIdsSet.has(baseRefId);
            return !isRefDeleted;
        });

        if (updatedRecs.length < recs.length) {
            console.log(`- Patching recommendedProducts for [${doc._type || 'product'}] ${doc.name || 'Untitled'} (ID: ${doc._id}) - keeping ${updatedRecs.length}/${recs.length}`);
            phase1Tx.patch(doc._id, {
                set: { recommendedProducts: updatedRecs }
            });
            phase1Count++;
        }
    });

    if (phase1Count > 0) {
        console.log(`⚡ Committing Phase 1 transaction...`);
        await phase1Tx.commit();
        console.log('✓ Phase 1 complete.');
    } else {
        console.log('No product-to-product references need cleaning.');
    }

    // --- PHASE 2: Clean up category references and delete non-peptide products ---
    console.log('\n--- PHASE 2: Cleaning up category references & deleting products ---');
    const phase2Tx = client.transaction();
    let phase2DeleteCount = 0;
    let phase2PatchCount = 0;

    // Delete products
    toDeleteDocs.forEach(doc => {
        console.log(`- Deleting [${doc._type || 'product'}] ${doc.name || 'Untitled'} (ID: ${doc._id})`);
        phase2Tx.delete(doc._id);
        phase2DeleteCount++;
    });

    // Patch categories for products we keep
    toKeepDocs.forEach(doc => {
        const refs = doc.categories || [];
        const peptideRefs = refs.filter(r => peptideCategoryIds.has(r._ref));
        
        if (peptideRefs.length < refs.length) {
            console.log(`- Patching categories for [${doc._type || 'product'}] ${doc.name || 'Untitled'} (ID: ${doc._id}) - keeping ${peptideRefs.length}/${refs.length}`);
            phase2Tx.patch(doc._id, {
                set: { categories: peptideRefs }
            });
            phase2PatchCount++;
        }
    });

    if (phase2DeleteCount > 0 || phase2PatchCount > 0) {
        console.log(`⚡ Committing Phase 2 transaction...`);
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

    console.log('\n🎉 Sanity database cleanup v4 successfully completed!');
}

run().catch(error => {
    console.error('❌ Error executing database cleanup:', error);
});
