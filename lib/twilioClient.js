var twilio = require('twilio');
var VoiceResponse = twilio.twiml.VoiceResponse;
var config = require('../config');
var client = twilio(config.accountSid, config.authToken);

module.exports = {
  createCall: (salesNumber, phoneNumber, headersHost, twilioClient = client) => {
    let url = headersHost + '/outbound/' + encodeURIComponent(salesNumber);
    let options = {
        to: phoneNumber,
        from: config.twilioNumber,
        url: url,
    };

    return twilioClient.calls.create(options)
      .then((message) => {
        console.log(message.responseText);
        return Promise.resolve('Thank you! We will be calling you shortly.')
      })
      .catch((error) => {
        console.log(error);
        return Promise.reject(error);
      });
  },
  voiceResponse: (salesNumber, Voice = VoiceResponse) => {
    let twimlResponse = new Voice();

    twimlResponse.say('Thanks for contacting our sales department. Our ' +
                      'next available representative will take your call. ',
                      { voice: 'alice' });
    twimlResponse.dial(salesNumber);

    return twimlResponse.toString();
  }
}
