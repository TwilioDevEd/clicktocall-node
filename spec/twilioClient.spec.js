const expect = require('chai').expect;
const twilioClient = require('../lib/twilioClient');

class FakeVoiceResponse {
  constructor(){}

  say = jest.fn();
  dial = jest.fn();
  toString = () => ('fake response voice');
}

describe('twilio client', () => {
  describe('createCall', () => {
    describe('when success', () => {
      it('resolves with a thank you message', async() => {
        const fakeTwilio = {
          calls: {
            create: function(){
              return Promise.resolve({responseText: 'message'});
            }
          }
        }
  
        let result = await twilioClient.createCall('sales-number', 'phone-number', 'http://localhost:1234', fakeTwilio);
        expect(result).to.equal('Thank you! We will be calling you shortly.');
      });
    });
  
    describe('when fails', () => {
      it('rejects with the error', async() => {
        const fakeTwilio = {
          calls: {
            create: function(){
              return Promise.reject({error: 'some error'});
            }
          }
        }
  
        try {
          await twilioClient.createCall('sales-number', 'phone-number', 'http://localhost:1234', fakeTwilio);
        }catch(error){
          expect(error).to.deep.equal({ error: 'some error' });
        }
      });
    });
  });

  describe('voiceResponse', () => {
    it('returns a string', () => {
      let result = twilioClient.voiceResponse('sales-number', FakeVoiceResponse);
      expect(result).to.equal('fake response voice');
    });
  });
});