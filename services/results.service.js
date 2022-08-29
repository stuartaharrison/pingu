const { QueryTypes } = require('sequelize');
const db = require('../configs/database');

const createResultAsync = async (destination, result) => {
    let newEntity = await db.Result.create({
        destination,
        wasReached: result
    });

    return newEntity;
};

const fetchResultsAsync = async (options) => {
    return await db.Result.findAll(options);
};

const fetchResultsIncidentTableAsync = async () => {
    var results = await db.sequelize.query(`
        SELECT
            DATE(r1.createdAt) AS 'date',
            COUNT(*) AS 'uptime',
            (
                SELECT
                    COUNT(*)
                FROM Results r2
                WHERE
                    r2.wasReached < 1
                    AND Date(r2.createdAt) = Date(r1.createdAt)
            ) AS 'incidents'
        FROM Results r1
        WHERE
            r1.wasReached > 0
            AND DATE(r1.createdAt) >= datetime('now', '-1 month')
        GROUP BY
            DATE(r1.createdAt)
        ORDER BY
            DATE(r1.createdAt) ASC;
    `, {
        type: QueryTypes.SELECT
    });

    // TODO: organise so that we always have a months worth of records?
    return results;
};

module.exports = {
    createResultAsync,
    fetchResultsAsync,
    fetchResultsIncidentTableAsync
};