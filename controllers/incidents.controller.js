const SequelizeQP = require('sequelizeqp');
const {
    fetchIncidentsAsync,
    fetchIncidentsTableAsync
} = require('../services/incidents.service');

const fetchIncidentsEndpoint = async (req, res) => {
    try {
        const sequelizeQP = new SequelizeQP({ dateOnlyCompare: true });
        const parsed = sequelizeQP.parse(req.query);
        const result = await fetchIncidentsAsync(parsed);
        
        res.status(200).json(result);
    }
    catch (err) {
        res.status(400).json({
            message: 'Oops! There was a problem getting your result(s).'
        });
    }
};

const fetchIncidentsTableEndpoint = async (req, res) => {
    try {
        // TODO: grab the date in the query
        var tableData = await fetchIncidentsTableAsync();
        res.status(200).json(tableData);
    }
    catch (err) {
        console.log('err', err);
        res.status(400).json({
            message: 'Oops! There was a problem getting your result(s).'
        });
    }
};

module.exports = {
    fetchIncidentsEndpoint,
    fetchIncidentsTableEndpoint
};