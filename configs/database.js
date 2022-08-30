const path = require('path');
const config = require('./config');
const { Sequelize } = require('sequelize');

module.exports = db = {};

initialize();

async function initialize() {
    // setup the path to the sqlite file
    let dbPath = path.join(__dirname, '../', 'content', `${config.DB_FILE_NAME}.sqlite`)

    // connect to our local database file
    const sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: dbPath,
        logging: config.DB_LOGGING_ENABLED
    });

    // init models and add them to the exported db object
    db.sequelize = sequelize;
    db.Incident = require('../models/incidents.model')(sequelize);
    db.SpeedTest = require('../models/speedtest.model')(sequelize);

    // sync all models with database
    await sequelize.sync();
}