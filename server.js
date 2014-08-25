var http = require('http');
var express = require('express');

// Create an Express web app
var app = express();

// Configure routes and middleware for the application
require('./routes')(app);

// Create an HTTP server to run our application
var server = http.createServer(app);

// export the HTTP server as the public module interface
module.exports = server;