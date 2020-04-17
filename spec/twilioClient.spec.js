const twilioClient = require('../lib/twilioClient');

class FakeVoiceResponse {
  constructor(){}
  
  say(){ return 'say-function' }
  dial(){ return 'dial-function' }
  toString(){ return 'fake response voice'; }
}

describe('twilio client', () => {
  describe('createCall', () => {
    describe('when success', () => {
      test('resolves with a thank you message', async() => {
        const fakeTwilio = {
          calls: {
            create: function(){
              return Promise.resolve({responseText: 'message'});
            }
          }
        }
  
        let result = await twilioClient.createCall('sales-number', 'phone-number', 'http://localhost:1234', fakeTwilio);
        expect(result).toEqual('Thank you! We will be calling you shortly.');
      });
    });
  
    describe('when fails', () => {
      test('rejects with the error', async() => {
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
          expect(error).toEqual({ error: 'some error' });
        }
      });
    });
  });

  describe('voiceResponse', () => {
    test('returns a string', () => {
      let result = twilioClient.voiceResponse('sales-number', FakeVoiceResponse);
      expect(result).toEqual('fake response voice');
    });
  });
});
