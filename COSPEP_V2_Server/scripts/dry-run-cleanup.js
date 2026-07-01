const { createClient } = require('@sanity/client');

const client = createClient({
    projectId: 'lxm1elmu',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2024-01-01',
    token: 'skWisNlu0HqHAno6Cc2fF60uDewNKHGO4kypb2oKrq8ifflhrKTbFLolC3Zh6HDhs716wcnGZ7B9b4e8VleTbOQyIUKUtD8jB7n5lwP5YwwZiqcbQKRBKxDAkXRUrs0WWlC9qSmoZPVgu3ujajOU0Yr4wtcv8a741laD5UBgmguV5GbS8lVo',
});

async function run() {
    console.log('--- DB CLEANUP DRY RUN ---');
    
    // 1. Fetch all categories
    const categories = await client.fetch(`*[_type == "category"] { _id, title, parentCategory, slug }`);
    const peptideCategoryIds = new Set(categories.filter(c => c.parentCategory === 'peptides').map(c => c._id));
    const nonPeptideCategories = categories.filter(c => c.parentCategory !== 'peptides');
    
    console.log(`\n[Categories to Delete] Total: ${nonPeptideCategories.length}`);
    nonPeptideCategories.forEach(c => {
        console.log(`- Category: ${c.title} (Parent: ${c.parentCategory}, ID: ${c._id})`);
    });

    // 2. Fetch all products
    const products = await client.fetch(`*[_type == "product"] { _id, name, categories }`);
    
    const productsToDelete = [];
    const productsToUpdate = [];
    const productsToKeep = [];

    products.forEach(p => {
        const refs = p.categories || [];
        const isDraft = p._id.startsWith('drafts.');
        const baseId = p._id.replace('drafts.', '');

        const peptideRefs = refs.filter(r => peptideCategoryIds.has(r._ref));
        const nonPeptideRefs = refs.filter(r => !peptideCategoryIds.has(r._ref));

        if (peptideRefs.length === 0) {
            productsToDelete.push({ id: p._id, name: p.name, refs: refs.length });
        } else if (nonPeptideRefs.length > 0) {
            productsToUpdate.push({
                id: p._id,
                name: p.name,
                allRefs: refs,
                keepRefs: peptideRefs,
                removeRefsCount: nonPeptideRefs.length
            });
        } else {
            productsToKeep.push({ id: p._id, name: p.name });
        }
    });

    console.log(`\n[Products to Delete] Total: ${productsToDelete.length}`);
    productsToDelete.forEach(p => {
        console.log(`- Product: ${p.name} (ID: ${p.id}, Category Refs: ${p.refs})`);
    });

    console.log(`\n[Products to Update] Total: ${productsToUpdate.length}`);
    productsToUpdate.forEach(p => {
        console.log(`- Product: ${p.name} (ID: ${p.id}, Removing ${p.removeRefsCount} non-peptide references)`);
    });

    console.log(`\n[Products to Keep] Total: ${productsToKeep.length}`);
    console.log(`Summary: ${productsToDelete.length} to delete, ${productsToUpdate.length} to update, ${productsToKeep.length} to keep.`);
}

run().catch(console.error);
