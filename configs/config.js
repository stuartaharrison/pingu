if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

module.exports = {
    PING_INTERVAL: process.env.PING_INTERVAL && !isNaN(process.env.PING_INTERVAL) ? process.env.PING_INTERVAL : 3,
    PINGABLE_SERVERS: ['8.8.8.8', '8.8.4.4', '1.1.1.1'],
    DB_FILE_NAME: process.env.DB_FILE_NAME || 'appdb',
    DB_LOGGING_ENABLED: process.env.DB_LOGGING_ENABLED && (process.env.DB_LOGGING_ENABLED === true || process.env.DB_LOGGING_ENABLED == 'true') ? true : false
};