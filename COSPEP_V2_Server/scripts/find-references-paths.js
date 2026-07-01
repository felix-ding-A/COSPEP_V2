const { createClient } = require('@sanity/client');

const client = createClient({
    projectId: 'lxm1elmu',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2024-01-01',
    token: 'skWisNlu0HqHAno6Cc2fF60uDewNKHGO4kypb2oKrq8ifflhrKTbFLolC3Zh6HDhs716wcnGZ7B9b4e8VleTbOQyIUKUtD8jB7n5lwP5YwwZiqcbQKRBKxDAkXRUrs0WWlC9qSmoZPVgu3ujajOU0Yr4wtcv8a741laD5UBgmguV5GbS8lVo',
});

function findPaths(obj, targetId, path = '') {
  const paths = [];
  
  if (!obj || typeof obj !== 'object') {
    return paths;
  }
  
  if (Array.isArray(obj)) {
    obj.forEach((item, index) => {
      if (item && typeof item === 'object') {
        if (item._ref === targetId) {
          if (item._key) {
            paths.push(`${path}[_key == "${item._key}"]`);
          } else {
            paths.push(`${path}[_ref == "${targetId}"]`);
          }
        } else {
          paths.push(...findPaths(item, targetId, `${path}[${index}]`));
        }
      }
    });
  } else {
    for (const key of Object.keys(obj)) {
      if (key.startsWith('_') && key !== '_key' && key !== '_ref') {
        continue;
      }
      
      const val = obj[key];
      if (val && typeof val === 'object') {
        if (val._ref === targetId) {
          paths.push(path ? `${path}.${key}` : key);
        } else {
          paths.push(...findPaths(val, targetId, path ? `${path}.${key}` : key));
        }
      }
    }
  }
  
  return paths;
}

async function run() {
    const targetId = 'zd6R3chuMYI41xMsyjPXch';
    console.log(`Scanning references for category ID: ${targetId}`);
    
    const docs = await client.fetch(`*[references($targetId)]`, { targetId });
    console.log(`Found ${docs.length} referencing documents.`);
    
    docs.forEach(doc => {
        const paths = findPaths(doc, targetId);
        console.log(`- Document ID: ${doc._id} (Type: ${doc._type}, Name/Title: ${doc.name || doc.title})`);
        paths.forEach(p => console.log(`  ↳ Path: ${p}`));
    });
}

run().catch(console.error);
