const express = require('express');
const router = express.Router();
const { 
    fetchResultsEndpoint,
    fetchResultsIncidentsTableEndpoint
} = require('../controllers/result.controller');

router.route('/results').get(fetchResultsEndpoint);
router.route('/results/incidents').get(fetchResultsIncidentsTableEndpoint);

module.exports = router;