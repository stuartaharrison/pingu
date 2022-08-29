const config = require('./config');
const { Sequelize } = require('sequelize');

module.exports = db = {};

initialize();

async function initialize() {
    // connect to our local database file
    const sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: `${config.DB_FILE_NAME}.sqlite`,
        logging: true
        //logging: config.DB_LOGGING_ENABLED
    });

    // init models and add them to the exported db object
    db.sequelize = sequelize;
    db.Result = require('../models/results.model')(sequelize);
    db.SpeedTest = require('../models/speedtest.model')(sequelize);

    // sync all models with database
    await sequelize.sync();
}