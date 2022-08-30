const express = require('express');
const router = express.Router();
const { 
    fetchIncidentsEndpoint,
    fetchIncidentsTableEndpoint
} = require('../controllers/incidents.controller');

router.route('/incidents').get(fetchIncidentsEndpoint);
router.route('/incidents/chart').get(fetchIncidentsTableEndpoint);

module.exports = router;