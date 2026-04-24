async function check(url, expectedStatus) {
    try {
        const res = await fetch(url, { redirect: 'manual' });
        console.log(`Fetched ${url} -> Status: ${res.status}`);
        if (res.status === expectedStatus) {
            console.log('✅ PASS');
        } else {
            console.log(`❌ FAIL: Expected ${expectedStatus}, got ${res.status}`);
            if (res.status >= 300 && res.status < 400) {
                console.log(`Location: ${res.headers.get('location')}`);
            }
        }
    } catch (e) {
        console.error('❌ Error:', e);
    }
}

async function run() {
    await check('http://localhost:3000/', 200);
    await check('http://localhost:3000/en', 308);
}

run();
