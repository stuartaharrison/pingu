const SequelizeQP = require('sequelizeqp');
const {
    fetchResultsAsync,
    fetchResultsIncidentTableAsync
} = require('../services/results.service');

const fetchResultsEndpoint = async (req, res) => {
    try {
        const sequelizeQP = new SequelizeQP({ dateOnlyCompare: true });
        const parsed = sequelizeQP.parse(req.query);
        const result = await fetchResultsAsync(parsed);
        
        res.status(200).json(result);
    }
    catch (err) {
        res.status(400).json({
            message: 'Oops! There was a problem getting your result(s).'
        });
    }
};

const fetchResultsIncidentsTableEndpoint = async (req, res) => {
    try {
        var tableData = await fetchResultsIncidentTableAsync();
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
    fetchResultsEndpoint,
    fetchResultsIncidentsTableEndpoint
};