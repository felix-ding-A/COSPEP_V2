const http = require('http');

function checkUrl(url, expectedStatus, expectedLocation) {
    return new Promise((resolve, reject) => {
        http.get(url, (res) => {
            console.log(`GET ${url} -> Status: ${res.statusCode}`);
            if (res.statusCode === expectedStatus) {
                if (expectedLocation) {
                    if (res.headers.location === expectedLocation) {
                        console.log(`✅ Correctly redirected to ${expectedLocation}`);
                        resolve(true);
                    } else {
                        console.error(`❌ Expected redirect to ${expectedLocation}, got ${res.headers.location}`);
                        resolve(false);
                    }
                } else {
                    console.log('✅ Status matched');
                    resolve(true);
                }
            } else {
                console.error(`❌ Expected status ${expectedStatus}, got ${res.statusCode}`);
                if (res.statusCode >= 300 && res.statusCode < 400) {
                    console.error(`Redirected to: ${res.headers.location}`);
                }
                resolve(false);
            }
        }).on('error', (e) => {
            console.error(`Error: ${e.message}`);
            resolve(false);
        });
    });
}

async function verify() {
    console.log('Verifying root URL (should be 200)...');
    const rootOk = await checkUrl('http://localhost:3000/', 200);

    console.log('\nVerifying /en URL (should be 308 redirect to /)...');
    const enOk = await checkUrl('http://localhost:3000/en', 308, '/'); // next-intl usually uses 308

    if (!enOk) {
        console.log('\nRetrying /en with 307 check just in case...');
        await checkUrl('http://localhost:3000/en', 307, '/');
    }
}

verify();
