const { createClient } = require('@sanity/client');

const client = createClient({
    projectId: 'lxm1elmu',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2024-01-01',
    token: 'skWisNlu0HqHAno6Cc2fF60uDewNKHGO4kypb2oKrq8ifflhrKTbFLolC3Zh6HDhs716wcnGZ7B9b4e8VleTbOQyIUKUtD8jB7n5lwP5YwwZiqcbQKRBKxDAkXRUrs0WWlC9qSmoZPVgu3ujajOU0Yr4wtcv8a741laD5UBgmguV5GbS8lVo',
});

async function run() {
    console.log('🚀 Starting Sanity database cleanup...\n');

    // 1. Fetch all categories to identify which are peptides and which are not
    const categories = await client.fetch(`*[_type == "category"] { _id, title, parentCategory }`);
    const peptideCategoryIds = new Set(categories.filter(c => c.parentCategory === 'peptides').map(c => c._id));
    const nonPeptideCategories = categories.filter(c => c.parentCategory !== 'peptides');

    console.log(`Found ${nonPeptideCategories.length} non-peptide categories to delete.`);

    // 2. Delete non-peptide categories
    const tx = client.transaction();
    nonPeptideCategories.forEach(c => {
        console.log(`- Queueing deletion of category: ${c.title} (${c.parentCategory})`);
        tx.delete(c._id);
    });

    // 3. Fetch all products to determine deletion/updates
    const products = await client.fetch(`*[_type == "product"] { _id, name, categories }`);
    
    let deleteCount = 0;
    let patchCount = 0;

    products.forEach(p => {
        const refs = p.categories || [];
        const peptideRefs = refs.filter(r => peptideCategoryIds.has(r._ref));

        if (peptideRefs.length === 0) {
            // Delete product
            console.log(`- Queueing deletion of product: ${p.name} (ID: ${p._id})`);
            tx.delete(p._id);
            deleteCount++;
        } else if (peptideRefs.length < refs.length) {
            // Patch product to only have peptide references
            console.log(`- Queueing patch for product: ${p.name} (ID: ${p._id}) - keeping ${peptideRefs.length}/${refs.length} categories`);
            tx.patch(p._id, {
                set: { categories: peptideRefs }
            });
            patchCount++;
        }
    });

    console.log(`\nSummary of operations to commit:`);
    console.log(`- Delete categories: ${nonPeptideCategories.length}`);
    console.log(`- Delete products: ${deleteCount}`);
    console.log(`- Patch products: ${patchCount}`);

    console.log('\n⚡ Committing transaction to Sanity...');
    const result = await tx.commit();
    console.log('🎉 Database cleanup successfully completed!');
}

run().catch(error => {
    console.error('❌ Error executing database cleanup:', error);
});
