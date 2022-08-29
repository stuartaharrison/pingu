const express = require('express');
const router = express.Router();
const { 
    fetchSpeedTestsEndpoint, 
    getAverageSpeedTestEndpoint,
    getLastSpeedTestEndpoint 
} = require('../controllers/speedtest.controller');

router.route('/speedtests').get(fetchSpeedTestsEndpoint);
router.route('/speedtests/average').get(getAverageSpeedTestEndpoint);
router.route('/speedtests/last').get(getLastSpeedTestEndpoint);

module.exports = router;