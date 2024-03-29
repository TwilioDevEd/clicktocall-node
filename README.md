
<a href="https://www.twilio.com">
  <img src="https://static0.twilio.com/marketing/bundles/marketing/img/logos/wordmark-red.svg" alt=Twilio width=250 />
</a>


# Click to Call - Node.js

> This repository is archived and no longer maintained. Check out the [Twilio Voice](https://www.twilio.com/docs/voice/) docs for links to other tutorials. 

## Set up

### Requirements

- [Nodejs](https://nodejs.org/) v10 or v12

### Twilio Account Settings

This application should give you a ready-made starting point for writing your own application.
Before we begin, we need to collect all the config values we need to run the application:

| Config Value | Description                                                                                                                                                  |
| :---------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| TWILIO_ACCOUNT_SID  | Your primary Twilio account identifier - find this [in the Console](https://www.twilio.com/console/project/settings).                                                         |
| TWILIO_AUTH_TOKEN   | Used to authenticate - just like the above, you'll find this [here](https://www.twilio.com/console/project/settings).                                                         |
| TWILIO_NUMBER | A Twilio phone number in [E.164 format](https://en.wikipedia.org/wiki/E.164) - you can [get one here](https://www.twilio.com/console/phone-numbers/incoming) |

### Local Development

1. First clone this repository and `cd` into it.

   ```bash
   git clone https://github.com/TwilioDevEd/clicktocall-node.git
   cd clicktocall-node
   ```

2. Install the dependencies.

   ```bash
   npm install
   ```

3. Copy the sample configuration file and edit it to match your configuration.

    ```bash
    cp .env.example .env
    ```

    See [Twilio Account Settings](#twilio-account-settings) to locate the necessary environment variables.

4. Launch local development web server, will run on port 3000.

    ```bash
    npm start
    ```

5. For Twilio to be able to talk to your application, you'll need a way to make your server publicly available to the internet. For local testing purposes, we recommend using [ngrok](http://ngrok.io/). Ngrok provides secure introspectable tunnels to localhost webhook development: for more information and instructions on setting up ngrok to work with your application, check out [this section of the Click to Call tutorial](https://www.twilio.com/docs/voice/tutorials/click-to-call-node-express#testing-your-app-locally).

   ```bash
   ngrok http 3000
   ```

6. Finally, open up your browser and go to your ngrok URL. It will look something like this: `http://<sub-domain>.ngrok.io`

That's it!

### Docker

If you have [Docker](https://www.docker.com/) already installed on your machine, you can use our `docker-compose.yml` to setup your project.

1. Make sure you have the project cloned.
2. Setup the `.env` file as outlined in the [Local Development](#local-development) steps.
3. Run `docker-compose up`.
4. Follow the steps in [Local Development](#local-development) on how to expose your port to Twilio using a tool like [ngrok](https://ngrok.com/) and configure the remaining parts of your application.

### Tests

To execute tests, run the following command in the project directory:

```bash
npm test
```

## Resources

- The CodeExchange repository can be found [here](https://github.com/twilio-labs/code-exchange/).

## License

[MIT](http://www.opensource.org/licenses/mit-license.html)

## Disclaimer

No warranty expressed or implied. Software is as is.

[twilio]: https://www.twilio.com
