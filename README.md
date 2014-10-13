# Click to Call - Node.js

An example application implementing Click to Call using Twilio.  For a
step-by-step tutorial, [visit this link](https://twilio.com/docs/howto/click-to-call).

Deploy this example app to Heroku now!

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/TwilioDevEd/clicktocall-node)

## Installation

Step-by-step on how to deploy, configure and develop on this example app.

### Fastest Deploy

Use Heroku to deploy this app immediately:

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/TwilioDevEd/clicktocall-node)

### Getting Started 

1) Grab latest source
<pre>
git clone git://github.com/TwilioDevEd/clicktocall-node.git 
</pre>

2) Navigate to folder and create new Heroku Cedar app
<pre>
heroku create
</pre>

3) Deploy to Heroku
<pre>
git push heroku master
</pre>

4) Scale your dynos
<pre>
heroku scale web=1
</pre>

5) Visit the home page of your new Heroku app to see your newly configured app!
<pre>
heroku open
</pre>


### Configuration

#### Setting Your Environment Variables

Are you using a bash shell? Use echo $SHELL to find out. For a bash shell, using the Gmail example, edit the ~/.bashrc or ~/.bashprofile file and add:
<pre>
export TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxx
export TWILIO_AUTH_TOKEN=yyyyyyyyyyyyyyyyy
export TWILIO_NUMBER=+15556667777
</pre>

Are you using Windows or Linux? You can read how to set variables [here](https://www.java.com/en/download/help/path.xml).

### Development

Getting your local environment setup to work with this app is similarly
easy.  After you configure your app with the steps above, use this guide to
get going locally:

1) Install the dependencies.
<pre>
npm install
</pre>

2) Launch local development webserver
<pre>
node app.js
</pre>

3) Open browser to [http://localhost:3000](http://localhost:3000).

4) Tweak away on `routes/index.js`.

## Meta 

* No warranty expressed or implied.  Software is as is. Diggity.
* [MIT License](http://www.opensource.org/licenses/mit-license.html)
* Lovingly crafted by Twilio Developer Education.
