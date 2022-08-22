const { Sequelize } = require('sequelize');

module.exports = db = {};

initialize();

async function initialize() {
    // connect to our local database file
    const sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: 'appdb.sqlite',
        logging: false
    });

    // init models and add them to the exported db object
    //db.User = require('../users/user.model')(sequelize);
    db.Result = require('../models/results.model')(sequelize);
    db.SpeedTest = require('../models/speedtest.model')(sequelize);

    // sync all models with database
    await sequelize.sync();
}