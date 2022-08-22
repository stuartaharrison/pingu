if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

module.exports = {
    PORT: process.env.PORT || 6323,
    MYSQL_DB_HOST: process.env.MYSQL_DB_HOST || 'localhost',
    MYSQL_DB_PORT: process.env.MYSQL_DB_PORT || 3306,
    MYSQL_DB_NAME: process.env.MYSQL_DB_NAME || 'pinger',
    MYSQL_DB_USER: process.env.MYSQL_DB_USER || 'root',
    MYSQL_DB_PASS: process.env.MYSQL_DB_PASS || 'root'
};