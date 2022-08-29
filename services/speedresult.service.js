const { QueryTypes } = require('sequelize');
const db = require('../configs/database');

const createSpeedTestAsync = async (record) => {
    return await db.SpeedTest.create(record);
};

const fetchSpeedTestsAsync = async (options) => {
    return await db.SpeedTest.findAll(options);
};

const getAverageSpeedTestAsync = async (date) => {
    var results = await db.sequelize.query(`
        SELECT 
            ROUND(AVG(downloadBytes), 2) AS 'download',
            ROUND(AVG(uploadBytes), 2) AS 'upload',
            ROUND(AVG(pingLow), 2) AS 'ping'
        FROM SpeedTests 
        WHERE 
            :date IS NULL 
            OR (:date IS NOT NULL AND DATE(createdAt) = :date)
    `, {
        replacements: {
            date: date ? date.yyyymmdd() : null
        },
        type: QueryTypes.SELECT
    });

    return results && results.length > 0 && results[0]['download'] !== null
        ? results[0] 
        : { download: 0, upload: 0, ping: 0 };
};

const getLastSpeedTestAsync = async () => {
    var result = await db.SpeedTest.findOne({
        order: [[ 'id', 'DESC' ]],
    });

    return result || {
        id: -1,
        resultId: null,
        jitter: 0,
        latency: 0,
        pingLow: 0,
        pingHigh: 0,
        downloadBytes: 0,
        uploadBytes: 0,
        createdAt: null,
        updatedAt: null
    };
};

module.exports = {
    createSpeedTestAsync,
    fetchSpeedTestsAsync,
    getAverageSpeedTestAsync,
    getLastSpeedTestAsync
};