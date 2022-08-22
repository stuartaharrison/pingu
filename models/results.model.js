const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const attributes = { 
        destination: {
            type: DataTypes.STRING(254),
            allowNull: false
        },
        wasReached: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    };

    const options = { };

    return sequelize.define('Result', attributes, options);
};