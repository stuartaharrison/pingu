const SequelizeQP = require('sequelizeqp');
const { 
    fetchSpeedTestsAsync,
    getAverageSpeedTestAsync,
    getLastSpeedTestAsync 
} = require('../services/speedresult.service');

const fetchSpeedTestsEndpoint = async (req, res) => {
    try {
        const sequelizeQP = new SequelizeQP({ dateOnlyCompare: true });
        const parsed = sequelizeQP.parse(req.query);
        const result = await fetchSpeedTestsAsync(parsed);
        
        res.status(200).json(result);
    }
    catch (err) {
        res.status(400).json({
            message: 'Oops! There was a problem getting your result(s).'
        });
    }
};

const getAverageSpeedTestEndpoint = async (req, res) => {
    try {
        let date = new Date(req.query.date);
        let avg = await getAverageSpeedTestAsync(date.isValid() ? date : null);
        
        res.status(200).json(avg);
    }
    catch (err) {
        res.status(400).json({
            message: 'Oops! There was a problem getting your result(s).'
        });
    }
};

const getLastSpeedTestEndpoint = async (req, res) => {
    try {
        let speedTest = await getLastSpeedTestAsync();
        res.status(200).json(speedTest);
    }
    catch (err) {
        res.status(400).json({
            message: 'Oops! There was a problem getting your result(s).'
        });
    }
};

module.exports = {
    fetchSpeedTestsEndpoint,
    getAverageSpeedTestEndpoint,
    getLastSpeedTestEndpoint
};