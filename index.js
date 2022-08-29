require('colors');
require('./helpers/formatter');
const http = require('http');
const config = require('./configs/config');
const createServer = require('./configs/express');
require('./configs/database');
require('./scheduler/ping.task');
require('./scheduler/speedtest.task');

// configure express server
const express = createServer();
const server = http.createServer(express);

server.listen(config.PORT, async () => {
    console.log(`🚀 Server is listening on Port: ${config.PORT}`);
    console.log(`🕸️  http://localhost:${config.PORT}`);
});