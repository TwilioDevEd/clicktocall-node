var path = require('path');
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var Twilio = require('twilio');
var config = require('../config');


// Create a Twilio REST API client for authenticated requests to Twilio
const client = new Twilio(config.accountSid, config.authToken);



// Configure application routes
module.exports = function(app) {
    // Set Jade as the default template engine
    app.set('view engine', 'jade');

    // Express static file middleware - serves up JS, CSS, and images from the
    // "public" directory where we started our webapp process
    app.use(express.static(path.join(process.cwd(), 'public')));

    // Parse incoming request bodies as form-encoded
    app.use(bodyParser.urlencoded({
        extended: true,
    }));

    // Use morgan for HTTP request logging
    app.use(morgan('combined'));

    // Home Page with Click to Call
    app.get('/', function(request, response) {
        response.render('index');
    });

    // Handle an AJAX POST request to place an outbound call
    app.post('/call', function(request, response) {
        // This should be the publicly accessible URL for your application
        // Here, we just use the host for the application making the request,
        // but you can hard code it or use something different if need be
        var salesNumber = request.body.salesNumber;
        var url = 'http://' + request.headers.host + '/outbound/' + encodeURIComponent(salesNumber)

        var options = {
            to: request.body.phoneNumber,
            from: config.twilioNumber,
            url: url,
        };

        // Place an outbound call to the user, using the TwiML instructions
        // from the /outbound route
        client.api.v2010.accounts(config.accountSid).calls.create(options)
          .then((error, message) => {
            console.log(error ? error: message.responseText);
            if (error) {
                response.status(500).send(error);
            } else {
                response.send({
                    message: 'Thank you! We will be calling you shortly.',
                });
            }
        });
    });

    // Return TwiML instuctions for the outbound call
    app.post('/outbound/:salesNumber', function(request, response) {
        var salesNumber = request.params.salesNumber;
        var twimlResponse = new Twilio.TwimlResponse();

        twimlResponse.say('Thanks for contacting our sales department. Our ' +
                          'next available representative will take your call. ',
                          { voice: 'alice' });

        twimlResponse.dial(salesNumber);

        response.send(twimlResponse.toString());
    });
};
