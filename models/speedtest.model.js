const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const attributes = {
        resultId: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        jitter: {
            type: DataTypes.DECIMAL(10, 3),
            allowNull: true
        },
        latency: {
            type: DataTypes.DECIMAL(10, 3),
            allowNull: true
        },
        pingLow: {
            type: DataTypes.DECIMAL(10, 3),
            allowNull: true
        },
        pingHigh: {
            type: DataTypes.DECIMAL(10, 3),
            allowNull: true
        },
        downloadBytes: {
            type: DataTypes.DECIMAL(10, 3),
            allowNull: true
        },
        uploadBytes: {
            type: DataTypes.DECIMAL(10, 3),
            allowNull: true
        }
    };

    const options = { };
    return sequelize.define('SpeedTest', attributes, options);
};