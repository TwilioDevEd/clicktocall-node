const request = require('supertest');

const server = require('../server');
const agent = request(server);

var mockTwilioClient = require('../lib/twilioClient');

mockTwilioClient.createCall = jest.fn();
mockTwilioClient.voiceResponse = jest.fn();

describe('index routes', () => {
  describe('GET /', () => {
    describe('when success', () => {
      test('renders home page', async() => {
        let result = await agent.get('/');
        expect(result.text).toContain('Click To Call');
        expect(result.text).toContain('Call Sales');
        expect(result.text).toContain('<button class="btn btn-default" type="submit">Contact Sales</button>');
      });
    });
  });

  describe('POST /call', () => {
    describe('when success', () => {
      test('responds with 200', async() => {
        mockTwilioClient.createCall.mockImplementation(() => Promise.resolve('some message'));

        let result = await agent.post('/call')
          .send({salesNumber: '+155', phoneNumber: '+123'});

        expect(result.statusCode).toEqual(200);
        expect(result.text).toEqual("{\"message\":\"some message\"}");
      });
    });

    describe('when fails', () => {
      test('responds with 500', async() => {
        mockTwilioClient.createCall.mockImplementation(() => Promise.reject({error: 'some err'}));

        let result = await agent
          .post('/call')
          .send({salesNumber: '+155', phoneNumber: '+123'});
        
        expect(result.statusCode).toEqual(500);
      });
    });
  });

  describe('POST /outbound/:salesNumber', () => {
    test('responds with a string', async() => {
      mockTwilioClient.voiceResponse.mockImplementation(() => 'VoiceResponse');

      let result = await agent.post('/outbound/123456');

      expect(result.statusCode).toEqual(200);
      expect(result.text).toEqual('VoiceResponse');
    });
  });
});
