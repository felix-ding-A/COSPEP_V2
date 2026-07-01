const { createClient } = require('@sanity/client');

const client = createClient({
    projectId: 'lxm1elmu',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2024-01-01',
    token: 'skWisNlu0HqHAno6Cc2fF60uDewNKHGO4kypb2oKrq8ifflhrKTbFLolC3Zh6HDhs716wcnGZ7B9b4e8VleTbOQyIUKUtD8jB7n5lwP5YwwZiqcbQKRBKxDAkXRUrs0WWlC9qSmoZPVgu3ujajOU0Yr4wtcv8a741laD5UBgmguV5GbS8lVo',
});

async function run() {
    const docId = 'versions.agent-ZfFwD0.7adc82e6-f5cb-4a22-a523-6dae9bcdf97f';
    console.log(`Getting document: ${docId}`);
    const doc = await client.getDocument(docId);
    console.log('Result:', doc);
}

run().catch(console.error);
