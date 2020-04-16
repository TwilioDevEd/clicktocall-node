
<a href="https://www.twilio.com">
  <img src="https://static0.twilio.com/marketing/bundles/marketing/img/logos/wordmark-red.svg" alt=Twilio width=250 />
</a>


# Click to Call - Node.js

![](https://github.com/TwilioDevEd/clicktocall-node/workflows/Node.js/badge.svg)

> We are currently in the process of updating this sample template. If you are encountering any issues with the sample, please open an issue at [github.com/twilio-labs/code-exchange/issues](https://github.com/twilio-labs/code-exchange/issues) and we'll try to help you.

This is an application example implementing Click to Call using Twilio.  For a
step-by-step tutorial, [visit this link](https://twilio.com/docs/howto/click-to-call).

[Read the full tutorial here](https://www.twilio.com/docs/tutorials/walkthrough/click-to-call/node/express)!

### Local Development

Getting your local environment setup to work with this app is easy.

1. Copy the `.env.example` file to `.env`, and edit it including your credentials
   for the Twilio API (found at https://www.twilio.com/user/account/settings). You
   will also need a [Twilio Number](https://www.twilio.com/user/account/phone-numbers/incoming).

    ```bash
    cp .env.example .env
    ```

1. Install the dependencies.

    ```bash
    npm install
    ```

1. Run tests.

    ```bash
    npm test
    ```

1. Launch local development web server.

    ```bash
    npm start
    ```

1. Start up ngrok as detailed below.

### Making your localhost accessible with ngrok

For Twilio to be able to talk to your application, you'll need a way to make your server publicly available to the internet.

For local testing purposes, we recommend using [ngrok](http://ngrok.io/). Ngrok provides secure introspectable tunnels to localhost webhook development: for more information and instructions on setting up ngrok to work with your application, check out [this section of the Click to Call tutorial](https://www.twilio.com/docs/voice/tutorials/click-to-call-node-express#testing-your-app-locally).

## Meta

* No warranty expressed or implied.  Software is as is. Diggity.
* The CodeExchange repository can be found [here](https://github.com/twilio-labs/code-exchange/).
* [MIT License](http://www.opensource.org/licenses/mit-license.html)
* Lovingly crafted by Twilio Developer Education.
