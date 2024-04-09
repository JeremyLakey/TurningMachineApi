
# Node Client

This is an client package for interfacing with this project's api.

To use this module, first install node. 

Install node and npm (https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

Initiate a your project `npm init`.

Run `npm install tm-bot-client` to install the client.

Import the client to a .js file with `const tm-client = require("tm-bot-client")`


## setBaseUrl(url: String) => void

Used to set the url for api calls. Must be set before using methods that make http calls. Returns nothing.


## getRules() => List[Rule]

Returns a list of js objects of rules for the game. 

Each rule follows this format.

Rule:
        {
            description: String (describes the possible rules),
            rule: (Int, Int, Int, Int) => Boolean (function for testing the rule)
            maxMode: Int
            mode
        }


## checkRule(a: Int, b: Int, c: Int, r: Int, m: Int) => Boolean

Returns where the three Int combination (a, b, c) passes the rule (r) on mode (m). 

limitations
1 <= a <= 5
1 <= b <= 5
1 <= c <= 5
0 <= r <= 48
0 <= m <= depends on rule (use getMaxMode(r))


## getDescription(r: Int) => String

Returns where a description of rule (r). Each rule is divided by it's modes, each mode is seperated by the ":" character. 

limitations
0 <= r <= 48


## getNumModes(r) => Int

Returns the number of modes a rule (r) has.

limitations
0 <= r <= 48

## async createAccount(username: String, password: String) => Undefined | Object

Creates an account with username and password. Sets a jwt authentication token on success and returns undefined. On failure, returns an err object

err object
        {
            err: String (description of error)
        }

## async deleteAccount() =>



## async doLogin(username, password) => String

## async startGame(n=4) => List[Int]

## async guess(a, b, c, r) => Boolean

## async solve(a, b, c) => Boolean

## async resetScore() => Void

## async getScore() => Score

## async getLeaderBoard() => List[Score]