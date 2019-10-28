
<a href="https://www.twilio.com">
  <img src="https://static0.twilio.com/marketing/bundles/marketing/img/logos/wordmark-red.svg" alt=Twilio width=250 />
</a>


# Click to Call - Node.js

This is an application example implementing Click to Call using Twilio.  For a
step-by-step tutorial, [visit this link](https://twilio.com/docs/howto/click-to-call).

[Read the full tutorial here](https://www.twilio.com/docs/tutorials/walkthrough/click-to-call/node/express)!

[![Build Status](https://travis-ci.org/TwilioDevEd/clicktocall-node.svg?branch=master)](https://travis-ci.org/TwilioDevEd/clicktocall-node)

## Configuration

### Setting Your Environment Variables

Are you using a bash shell? Use echo $SHELL to find out. For a bash shell, using the Gmail example, edit the ~/.bashrc or ~/.bashprofile file and add:

```bash
export TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxx
export TWILIO_AUTH_TOKEN=yyyyyyyyyyyyyyyyy
export TWILIO_NUMBER=+15556667777

```

Are you using Windows or Linux? You can learn more about how to set variables [here](https://www.java.com/en/download/help/path.xml).

### Development

Getting your local environment setup to work with this app is easy.  
After you configure your app with the steps above use this guide to
get it going locally.

1. Install the dependencies.

```bash
npm install
```

1. Launch local development web server.

```bash
node app.js
```

1. Open browser to [http://localhost:3000](http://localhost:3000).

1. Tweak away on `routes/index.js`.

### Making your localhost accessible with ngrok

For Twilio to be able to talk to your application, you'll need a way to make your server publicly available to the internet.

For local testing purposes, we recommend using [ngrok](http://ngrok.io/). Ngrok provides secure introspectable tunnels to localhost webhook development: for more information and instructions on setting up ngrok to work with your application, check out [this section of the Click to Call tutorial](https://www.twilio.com/docs/voice/tutorials/click-to-call-node-express#testing-your-app-locally).

## Meta

* No warranty expressed or implied.  Software is as is. Diggity.
* [MIT License](http://www.opensource.org/licenses/mit-license.html)
* Lovingly crafted by Twilio Developer Education.
