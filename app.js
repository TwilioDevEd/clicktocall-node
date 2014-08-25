// Create and start server on configured port
var config = require('./config');
var server = require('./server');
server.listen(config.port, function() {
    console.log('Express server running on port ' + config.port);
});