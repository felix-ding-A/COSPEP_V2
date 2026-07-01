const { createClient } = require('@sanity/client');

const client = createClient({
    projectId: 'lxm1elmu',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2024-01-01',
    token: 'skWisNlu0HqHAno6Cc2fF60uDewNKHGO4kypb2oKrq8ifflhrKTbFLolC3Zh6HDhs716wcnGZ7B9b4e8VleTbOQyIUKUtD8jB7n5lwP5YwwZiqcbQKRBKxDAkXRUrs0WWlC9qSmoZPVgu3ujajOU0Yr4wtcv8a741laD5UBgmguV5GbS8lVo',
});

async function run() {
    // 1. Fetch all product IDs
    const products = await client.fetch(`*[_type == "product"] { _id }`);
    const baseProductIds = Array.from(new Set(products.map(p => p._id.replace('drafts.', ''))));

    console.log(`Found ${baseProductIds.length} base product IDs.`);

    // 2. Construct release IDs
    const releaseIds = baseProductIds.map(id => `versions.agent-ZfFwD0.${id}`);

    // 3. Fetch documents
    console.log('Fetching constructed release documents...');
    const docs = await client.getDocuments(releaseIds);
    const existingDocs = docs.filter(Boolean);

    console.log(`Found ${existingDocs.length} existing release documents:`);
    existingDocs.forEach(d => {
        console.log(`- [${d._type}] ${d.name || d.title || 'Untitled'} (ID: ${d._id})`);
    });
}

run().catch(console.error);
