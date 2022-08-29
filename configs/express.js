const cors = require('cors');
const express = require('express');
const routes = require('../routes');

module.exports = () => {
    const app = express();
    
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // setup the routes
    for (var i = 0; i < routes.length; i++) {
        app.use('/api', routes[i]);
    }
    
    return app;
};