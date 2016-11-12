
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


### Fastest Deploy

Use Heroku to deploy this app immediately.

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/TwilioDevEd/clicktocall-node)


### Getting Started

1. Clone repository and `cd` into it.

```bash
git clone git://github.com/TwilioDevEd/clicktocall-node.git
```

1. Navigate to folder and create new Heroku Cedar app.

```bash
heroku create
```

1. Deploy to Heroku.

```bash
git push heroku master
```

1. Scale your dynos.

```bash
heroku scale web=1
```

1. Visit the home page of your new Heroku app to see your newly configured app!

```bash
heroku open
```


### Configuration

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
After you configure your app with the steps above use this guide to
get it going locally.

1. Install the dependencies.

```bash
npm install
```

1. Launch local development webserver.

```bash
node app.js
```

1. Open browser to [http://localhost:3000](http://localhost:3000).

1. Tweak away on `routes/index.js`.


## Meta

* No warranty expressed or implied.  Software is as is. Diggity.
* [MIT License](http://www.opensource.org/licenses/mit-license.html)
* Lovingly crafted by Twilio Developer Education.
