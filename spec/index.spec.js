const expect = require('chai').expect;
const request = require('supertest');

const server = require('../server');
const agent = request(server);

var mockTwilioClient = require('../lib/twilioClient');

mockTwilioClient.createCall = jest.fn();
mockTwilioClient.voiceResponse = jest.fn();

describe('index routes', () => {
  describe('GET /', () => {
    describe('when success', () => {
      it('renders home page', async() => {
        let result = await agent.get('/');
        expect(result.text).to.contains('Click To Call');
        expect(result.text).to.contains('Call Sales');
        expect(result.text).to.contains('<button class="btn btn-default" type="submit">Contact Sales</button>');
      });
    });
  });

  describe('POST /cal', () => {
    describe('when success', () => {
      it('responds with 200', async() => {
        mockTwilioClient.createCall.mockImplementation(() => Promise.resolve('some message'));

        let result = await agent.post('/call')
          .send({salesNumber: '+155', phoneNumber: '+123'});

        expect(result.text).to.deep.equal("{\"message\":\"some message\"}");
      });
    });

    describe('when fails', () => {
      it('responds with 500', (done) => {
        mockTwilioClient.createCall.mockImplementation(() => Promise.reject({error: 'some err'}));

        agent
          .post('/call')
          .send({salesNumber: '+155', phoneNumber: '+123'})
          .expect(500)
          .end(function (err, res) {
            if(err){
              return done('should not fail');
            }
            expect(res.statusCode).to.equal(500);
            done();
          });
      });
    });
  });

  describe('POST /outbound/:salesNumber', () => {
    it('responds with a string', (done) => {
      mockTwilioClient.voiceResponse.mockImplementation(() => 'VoiceResponse');

      agent
        .post('/outbound/123456')
        .expect(200)
        .end((err, res) => {
          if(err){
            return done('should not fail');
          }
          expect(res.text).to.equal('VoiceResponse');
          done();
        });
    });
  });
});
