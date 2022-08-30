const cron = require('node-cron');
const ping = require('ping');
const config = require('../configs/config');
const { createIncidentAsync } = require('../services/incidents.service');

const interval = config.PING_INTERVAL;
const servers = config.PINGABLE_SERVERS;

// Makes a check to confirm connectivity.
// I've found that one ping can give a false negative
const checkConnectionResults = (results) => {
    let areAlive = results.map(el => el ? el.alive : false);
    let areFalse = areAlive.filter(el => el == false);
    let areTrue = areAlive.filter(el => el == true);

    if (areTrue.length == 0) {
        console.log(`WARN: Connection has dropped!`.yellow);
    }
    else if (areFalse.length > 0) {
        console.log(`WARN: ${areFalse.length} server(s) out of ${results.length} reported no connectivity.`.yellow);
    }
    else {
        console.log(`INFO: Connection is okay.`.cyan);
    }

    return areTrue.length > 0;
};

const cronSchedule = `*/${interval} * * * *`;
console.log(`INFO: Ping Interval: '${interval}' - CRON: '${cronSchedule}'`.cyan);

cron.schedule(cronSchedule, () => {
    console.log(`INFO: Checking connection to the internet.`.cyan);

    // build the promises and then basically wait for all the pings to resolve
    let promises = [];
    servers.forEach(host => promises.push(ping.promise.probe(host)));

    // once all the servers have been pinged, we then do check to make
    // sure there is a connection and not a false negative
    Promise.all(promises).then(async results => {
        let isConnected = checkConnectionResults(results);
        let destinations = servers.join(', ');

        // only record when there is a connection drop!
        if (!isConnected) {
            await createIncidentAsync(destinations);
        }
    });
});