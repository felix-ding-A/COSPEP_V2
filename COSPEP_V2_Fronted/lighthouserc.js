module.exports = {
    ci: {
        collect: {
            url: ['https://cospep.com'],
            settings: {
                preset: 'desktop',
                chromeFlags: '--no-sandbox --headless --disable-gpu --disable-dev-shm-usage',
            },
        },
        upload: {
            target: 'temporary-public-storage',
        },
    },
};
