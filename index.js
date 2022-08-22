require('colors');
require('./configs/config');
require('./configs/database');
require('./scheduler/ping.task');
require('./scheduler/speedtest.task');

// TODO: setup express/http server for our rest endpoints to retrieve the data