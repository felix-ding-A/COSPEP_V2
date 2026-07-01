const { createClient } = require('@sanity/client');

const client = createClient({
    projectId: 'lxm1elmu',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2024-01-01',
    token: 'skWisNlu0HqHAno6Cc2fF60uDewNKHGO4kypb2oKrq8ifflhrKTbFLolC3Zh6HDhs716wcnGZ7B9b4e8VleTbOQyIUKUtD8jB7n5lwP5YwwZiqcbQKRBKxDAkXRUrs0WWlC9qSmoZPVgu3ujajOU0Yr4wtcv8a741laD5UBgmguV5GbS8lVo',
});

async function run() {
    // Get non-peptide categories
    const categories = await client.fetch(`*[_type == "category"] { _id, title, parentCategory }`);
    const nonPeptideCategories = categories.filter(c => c.parentCategory !== 'peptides');
    const nonPeptideCategoryIds = nonPeptideCategories.map(c => c._id);

    console.log(`Non-Peptide Categories:`, nonPeptideCategoryIds);

    for (const catId of nonPeptideCategoryIds) {
        const cat = nonPeptideCategories.find(c => c._id === catId);
        const refs = await client.fetch(`*[references($catId)] { _id, _type, name, title }`, { catId });
        if (refs.length > 0) {
            console.log(`\nCategory "${cat.title}" (ID: ${catId}) is referenced by:`);
            refs.forEach(r => {
                console.log(`  - [${r._type}] ${r.name || r.title || 'Untitled'} (ID: ${r._id})`);
            });
        }
    }
}

run().catch(console.error);
