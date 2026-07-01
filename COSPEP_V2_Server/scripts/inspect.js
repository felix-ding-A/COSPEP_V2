const { createClient } = require('@sanity/client');

const client = createClient({
    projectId: 'lxm1elmu',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2024-01-01',
    token: 'skWisNlu0HqHAno6Cc2fF60uDewNKHGO4kypb2oKrq8ifflhrKTbFLolC3Zh6HDhs716wcnGZ7B9b4e8VleTbOQyIUKUtD8jB7n5lwP5YwwZiqcbQKRBKxDAkXRUrs0WWlC9qSmoZPVgu3ujajOU0Yr4wtcv8a741laD5UBgmguV5GbS8lVo',
});

async function run() {
    console.log('Fetching categories...');
    const categories = await client.fetch(`*[_type == "category"] { _id, title, parentCategory, slug }`);
    console.log(`Found ${categories.length} categories:`);
    categories.forEach(c => {
        console.log(`- [${c._id}] ${c.title} (Parent: ${c.parentCategory})`);
    });

    console.log('\nFetching products...');
    const products = await client.fetch(`*[_type == "product"] { _id, name, "categoryRefs": categories[]->{ _id, title, parentCategory } }`);
    console.log(`Found ${products.length} products:`);
    products.forEach(p => {
        const catList = p.categoryRefs ? p.categoryRefs.map(c => `${c.title} (${c.parentCategory})`).join(', ') : 'None';
        console.log(`- [${p._id}] ${p.name} (Categories: ${catList})`);
    });
}

run().catch(console.error);
