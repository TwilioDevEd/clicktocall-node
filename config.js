var defaultEnv = require('./app.json').env;

// Define app configuration in a single location, but pull in values from
// system environment variables (so we don't check them in to source control!)
module.exports = {
    // Twilio Account SID - found on your dashboard
    accountSid: process.env.TWILIO_ACCOUNT_SID || defaultEnv.TWILIO_ACCOUNT_SID.value,

    // Twilio Auth Token - found on your dashboard
    authToken: process.env.TWILIO_AUTH_TOKEN || defaultEnv.TWILIO_AUTH_TOKEN.value,

    // A Twilio number that you have purchased through the twilio.com web
    // interface or API
    twilioNumber: process.env.TWILIO_NUMBER || defaultEnv.TWILIO_NUMBER.value,

    // The port your web application will run on
    port: process.env.PORT || 3000
};
