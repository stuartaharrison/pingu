if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

module.exports = {
    PORT: process.env.PORT || 6323,
    DB_FILE_NAME: process.env.DB_FILE_NAME || 'appdb',
    DB_LOGGING_ENABLED: process.env.DB_LOGGING_ENABLED && (process.env.DB_LOGGING_ENABLED === true || process.env.DB_LOGGING_ENABLED == 'true') ? true : false
};