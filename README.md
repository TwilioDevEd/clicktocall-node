
<a href="https://www.twilio.com">
  <img src="https://static0.twilio.com/marketing/bundles/marketing/img/logos/wordmark-red.svg" alt=Twilio width=250 />
</a>


# Click to Call - Node.js

This is an application example implementing Click to Call using Twilio.  For a
step-by-step tutorial, [visit this link](https://twilio.com/docs/howto/click-to-call).

[Read the full tutorial here](https://www.twilio.com/docs/tutorials/walkthrough/click-to-call/node/express)!

[![Build Status](https://travis-ci.org/TwilioDevEd/clicktocall-node.svg?branch=master)](https://travis-ci.org/TwilioDevEd/clicktocall-node)


## Installation

Step-by-step on how to deploy, configure and develop on this example app.

### Getting Started

1. Clone repository and `cd` into it.

```bash
git clone git://github.com/TwilioDevEd/clicktocall-node.git
```


#### Setting Your Environment Variables

Are you using a bash shell? Use echo $SHELL to find out. For a bash shell, using the Gmail example, edit the ~/.bashrc or ~/.bashprofile file and add:

```bash
export TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxx
export TWILIO_AUTH_TOKEN=yyyyyyyyyyyyyyyyy
export TWILIO_NUMBER=+15556667777

```

Are you using Windows or Linux? You can learn more about how to set variables [here](https://www.java.com/en/download/help/path.xml).


### Development

Getting your local environment setup to work with this app is easy.  
For the following platforms, download the ngrok executable to host your application `live` online:


1. Install the dependencies.

```bash
npm install
```

2. Launch local development webserver.

```bash
node app.js
```

3. Download The Ngrok executable [here](https://ngrok.com/download).

4. Launch the ngrok executable wherever you placed the executable after unzipping

```windows
./ngrok http 3000
```

``` mac/bsd/linux
ngrok http 3000 
```
**place within your /usr/local/bin or /bin folder else perform the same command as windows**

5. Open browser to `http://your-random-ngrok-url:3000`

6. Configure `public/app.js` or `routes/index.js` for extra customization.


## Notes

Linux 32-bit ARM machines are unable to perform the outbound click-to-call example, someone can provide the necessary dependencies for
proper execution?

## Meta

* No warranty expressed or implied.  Software is as is. Diggity.
* [MIT License](http://www.opensource.org/licenses/mit-license.html)
* Lovingly crafted by Twilio Developer Education.
