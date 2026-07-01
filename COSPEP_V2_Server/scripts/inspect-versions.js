const { createClient } = require('@sanity/client');

const client = createClient({
    projectId: 'lxm1elmu',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2024-01-01',
    token: 'skWisNlu0HqHAno6Cc2fF60uDewNKHGO4kypb2oKrq8ifflhrKTbFLolC3Zh6HDhs716wcnGZ7B9b4e8VleTbOQyIUKUtD8jB7n5lwP5YwwZiqcbQKRBKxDAkXRUrs0WWlC9qSmoZPVgu3ujajOU0Yr4wtcv8a741laD5UBgmguV5GbS8lVo',
});

async function run() {
    console.log('Fetching all version documents using raw perspective...');
    // In Sanity client, the third argument to fetch can contain options
    const docs = await client.fetch(
        `*[string::startsWith(_id, "versions.")] { _id, _type, name, title }`,
        {},
        { perspective: 'raw' }
    );
    console.log(`Found ${docs.length} documents:`);
    docs.forEach(d => {
        console.log(`- [${d._type}] ${d.name || d.title || 'Untitled'} (ID: ${d._id})`);
    });
}

run().catch(console.error);
