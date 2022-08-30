require('colors');
require('./helpers/formatter');
const http = require('http');
const config = require('./configs/config');
const createServer = require('./configs/express');

console.log(`INFO: You are running in '${process.env.NODE_ENV}' mode.`.cyan);

require('./configs/database');
require('./scheduler/ping.task');
require('./scheduler/speedtest.task');

// configure express server
const express = createServer();
const server = http.createServer(express);

server.listen(6323, async () => {
    console.log(`🚀 Server is listening on Port: 6323`);
    console.log(`🕸️  http://localhost:6323`);    
});