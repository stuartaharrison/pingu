const { QueryTypes } = require('sequelize');
const { enumerateDaysBetweenDates } = require('../helpers/dates');
const config = require('../configs/config');
const db = require('../configs/database');
const moment = require('moment');

const minutesInTheDay = 1440;

const createIncidentAsync = async (destination) => {
    let newEntity = await db.Incident.create({
        destination
    });

    return newEntity;
};

const fetchIncidentsAsync = async (options) => {
    return await db.Incident.findAll(options);
};

const fetchIncidentsTableAsync = async (endDate = moment()) => {
    let startDate = endDate.clone().subtract(1, 'months');
    var results = await db.sequelize.query(`
        SELECT
            DATE(createdAt) AS 'date',
            COUNT(*) AS 'totalIncidents'
        FROM Incidents
        WHERE
            DATE(createdAt) >= :startDate
        GROUP BY
            DATE(createdAt)
        ORDER BY
            DATE(createdAt) ASC;
    `, {
        replacements: {
            startDate: startDate.format('YYYY-MM-DD')
        },
        type: QueryTypes.SELECT
    });
    
    var dates = enumerateDaysBetweenDates(startDate, endDate);
    var data = dates.map((d) => {
        // find the matching record and get the total number of incidents (connection drops)
        var incidentRecord = results.find(el => el.date == d);
        var incidents = incidentRecord ? incidentRecord.totalIncidents : 0;

        // calculate the total number of pings we've had this day
        var total = minutesInTheDay / config.PING_INTERVAL;
        var connected = total - incidents;

        return {
            date: d,
            incidents,
            connected,
            uptimePercent: ((connected / total) * 100).toFixed(2),
            downtimePercent: incidents < 1 ? 0 : ((incidents / total) * 100).toFixed(2)
        }
    });

    return data;
};

module.exports = {
    createIncidentAsync,
    fetchIncidentsAsync,
    fetchIncidentsTableAsync
};