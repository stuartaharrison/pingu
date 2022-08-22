const db = require('../configs/database');

const createSpeedTestAsync = async (record) => {
    return await db.SpeedTest.create(record);
};

module.exports = {
    createSpeedTestAsync
};