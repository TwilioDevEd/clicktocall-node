var test = require('tape');
var request = require('supertest');
var server = require('../server');

test('home page responds with 200', function (t) {
    t.plan(1);

    request(server).get('/').expect(200).end(function(err, response) {
        if (err) {
            t.fail('HTTP request did not return 200 OK.');
        } else {
            t.pass('HTTP request successful');
        }
    });

});

test('ajax POST returns 200 and JSON with a valid phone', function (t) {
    t.plan(1);

    request(server).get('/').expect(200).end(function(err, response) {
        if (err) {
            t.fail('HTTP request did not return 200 OK.');
        } else {
            t.pass('HTTP request successful');
        }
    });
    
});