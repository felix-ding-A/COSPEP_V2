module.exports = {
    ci: {
        collect: {
            url: ['https://cospep.com'],
            startServerCommand: undefined,
            settings: {
                chromeFlags: '--no-sandbox --headless=new --disable-gpu',
            },
        },
        upload: {
            target: 'temporary-public-storage',
        },
    },
};
