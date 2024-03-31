# TurningMachineApi
Turning Machine Game Api

This is a fan project inspired by the game Turning Machine published by Scorpion and designed by Manuel Sanchez. I'm not affliated with them in any way. Learn more about Turn Machine at this url. (https://www.turingmachine.info/). The main point of this API/project is to test bots and ai for a game simular to Turning Machine (I'm might add additional rules and change rules to add challenge for the bots). 

# How to build a bot

You can use a prebuilt node.js client or build your own client to interact with the server.

### Using the node client

Install node and npm (https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

Initiate a your project `npm init`.

Run `npm install tm-bot-client` to install the client.

Import the client to a .js file with `const tm-client = require("tm-bot-client")`

See here for more documentation on how to use the [prebuilt node client](./documentation/client.md).

### Building your own client

See here for the [Server Api](./documentation/api.md) documentation. This describes what the server will expect/return for each route.

# How to host a server

Install node and npm (https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

Clone this repo locally `git clone https://github.com/JeremyLakey/TurningMachineApi.git`

Set up a mongodb instance somewhere. Here is one unaffiliated [hosting site](https://www.mongodb.com/products/platform/cloud) I used once (You can also set one up [locally too](https://www.prisma.io/dataguide/mongodb/setting-up-a-local-mongodb-database)). Then updated the `mongoDBPath` value in the config.json file.

Generate your own secret for making auth tokens. To do this with node, run this in the terminal `node` then run `require('crypto').randomBytes(64).toString('hex')`. Copy the output and paste it into the `secret` value in the config.json file

Update the `port` value to a port that is [port forwarded](https://www.noip.com/support/knowledgebase/general-port-forwarding-guide) and free.

Run `node index.js` in the project directory to start the server.
