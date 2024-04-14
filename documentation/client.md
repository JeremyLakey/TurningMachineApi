
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

Rule object
        {
            description: String (describes the possible rules),
            rule: (Int, Int, Int, Int) => Boolean (function for testing the rule)
            maxMode: Int
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


## getNumModes(r: Int) => Int

Returns the number of modes a rule (r) has.

limitations
0 <= r <= 48

## async createAccount(username: String, password: String) => String | Object

Creates an account with username and password. On failure, returns an err object. On success, returns a jwt authenication token as a string. This token is automatically set and cached for other functions. But you can swap out the cached token with setToken(token). 

err object
        {
            err: String (description of error)
        }

## async deleteAccount() => Boolean

Deletes account with the a jwt authentication token. Will throw an error if token is not set. Returns true if the account was deleted. Returns false if an error occured.

## async doLogin(username, password) => String

Logs into an account with username and passwords. Throws an error on failure. Returns a jwt authenication token as a string. This token is automatically set and cached for other functions. But you can swap out the cached token with setToken(token). 

## async startGame(n: Int = 4) => List[Int]

Initates a new game using cached jwt authentication token. Use parameter 'n' to set the number or rules. Must be set before solving or guessing.

limitations
4 <= n <= 6

## async guess(a: Int, b: Int, c: Int, r: Int) => Boolean

Takes a guess on a rule using jwt authentication token to identify user/game. Returns true if the guess is valid, and false when invalid or an error has occured. Adds one to guess total on the user's stat block.

limitations
1 <= a <= 5
1 <= b <= 5
1 <= c <= 5
0 <= r <= n - 1 (Where 'n' is the number of rules in the game)

## async solve(a: Int, b: Int, c: Int) => Boolean

Takes a guess at a solve on for the game using cached jwt authentication token to identify user/game. Returns true if the guess is valid, and false when invalid or an error has occured.

limitations
1 <= a <= 5
1 <= b <= 5
1 <= c <= 5

## async resetScore() => Void

Using the cached jwt authentication token to identify a user, this resets the user stats back to the default values. Throws error on missing token or a failed attempt.

## async getScore(username: String) => Stat

Gets a stat object for a username. No log in or token required.

Stat object
{
    name: String,
    score: Number,
    totalGuesses: Int,
    solves: Int,
}

## async getLeaderBoard(num: Int = 10, skip: Int = 0) => List[Stat]

Gets top stat blocks in descending order based on score. No log in or token required. 'num' is the maximum number of stats requite. 'skip' is used for pagination.

limitations
1 <= num <= 100


Stat object
{
    name: String,
    score: Number,
    totalGuesses: Int,
    solves: Int,
}

## setDebugMode(mode: Boolean) => void

Used to set debug mode.

## setToken(token) => Void

Used to set/cache a different jwt authentication token. You generally shouldn't need this, because the login and create account methods both set the token. 