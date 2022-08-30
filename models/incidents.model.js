const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const attributes = { 
        destination: {
            type: DataTypes.STRING(254),
            allowNull: false
        }
    };

    const options = { };

    return sequelize.define('Incident', attributes, options);
};