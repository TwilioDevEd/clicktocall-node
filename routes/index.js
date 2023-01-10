const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const twilioClient = require('../lib/twilioClient');

module.exports = function(app) {
    // Set Pug as the default template engine
    app.set('view engine', 'pug');

    // Express static file middleware - serves up JS, CSS, and images from the
    // "public" directory where we started our webapp process
    app.use(express.static(path.join(process.cwd(), 'public')));

    // Parse incoming request bodies as form-encoded
    app.use(bodyParser.json({}));
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    // Use morgan for HTTP request logging
    app.use(morgan('combined'));

    // Home Page with Click to Call
    app.get('/', function(request, response) {
      response.render('index');
    });

    // Handle an AJAX POST request to place an outbound call
    app.post('/call', function(request, response) {
      let salesNumber = request.body.salesNumber;
      let phoneNumber = request.body.phoneNumber;

      // This should be the publicly accessible URL for your application
      // Here, we just use the host for the application making the request,
      // but you can hard code it or use something different if need be
      // For local development purposes remember to use ngrok and replace the headerHost
      let headersHost = 'http://' + request.headers.host;

      twilioClient.createCall(salesNumber, phoneNumber, headersHost)
        .then((result) => {
        response.send({message: result});
        })
        .catch((error) => {
        response.status(500).send(error);
        });
    });

    // Return TwiML instructions for the outbound call
    app.get('/outbound/:salesNumber', function(request, response) {
      let result = twilioClient.voiceResponse(request.params.salesNumber);
      response.send(result);
    });
};
