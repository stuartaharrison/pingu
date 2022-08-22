const { exec } = require('child_process');

// note: that the output from speedtest should be in json format (--format=json)
const formatJsonResponse = (output) => {
    let json = JSON.parse(output);
    const { ping, download, upload, result } = json;
    const record = {
        resultId: result.id,
        jitter: ping.jitter,
        latency: ping.latency,
        pingLow: ping.low,
        pingHigh: ping.high,
        downloadBytes: download.bytes,
        uploadBytes: upload.bytes,
    };
    return record;
};

module.exports = () => {
    return new Promise((resolve, reject) => {
        // make the call to the speedtest.net site and grab the result
        exec('speedtest --progress=no --format=json', (error, standardOutput, standardError) => {
            if (error) {
                reject(error);
            } 
            else if (standardError) {
                reject(standardError);
            }
            else {
                try {
                    resolve(formatJsonResponse(standardOutput));
                }
                catch (err) {
                    reject(err);
                }
            }
        });
    });
};