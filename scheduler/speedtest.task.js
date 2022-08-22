const cron = require('node-cron');
const speedtest = require('../helpers/testspeed');
const { formatBytes } = require('../helpers/formatter');
const { createSpeedTestAsync } = require('../services/speedresult.service');

cron.schedule('0 * * * *', () => {
    console.log(`INFO: Speed Test has started.`.cyan);
    speedtest().then(async success => {
        console.log(`INFO: ✅ Speed Test completed.`.cyan);
        console.log(`INFO: Download: ${formatBytes(success.downloadBytes)}`.cyan);
        console.log(`INFO: Upload: ${formatBytes(success.uploadBytes)}`.cyan);

        await createSpeedTestAsync(success);
    }, err => {
        console.log(`ERROR: There was a problem with checking your broadband speed.`.red, err);
    });
});