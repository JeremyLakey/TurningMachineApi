# Explanation
This is a fan project inspired by the game Turning Machine published by Scorpion and designed by Manuel Sanchez. I'm not affliated with them in any way. Learn more about Turn Machine at this url. (https://www.turingmachine.info/). The main point of this API/project is to test bots and ai for a game simular to Turning Machine (I'm might add additional rules and change rules to add challenge for the bots). 

Each of these endpoints have a base url, depending on where the server is hosted. 

Just replace "base-url" with the real url.


# Authorization Token

Creating an account and login both return a token that is required for most routes.

Tokens last for 30 minutes. At which point, the token needs to be refreshed.

Tokens required requests should use the "Authorization" header with this value "Bearer <token value>"


# Create an account

POST base-url/user

Used to create a new account on the api. Does not return a login token. 

Request body 
name            String          Required
password        String          Required

Response body
token           String          Only on success
err             String          Only on error

Error codes
201             Created user
401             Username already taken
400             Bad request


# Login to account

POST base-url/user/login

Used to login into an account and get an authorization token.

Request body
name            String          Required
password        String          Required

Response body
token           String          Only on success
err             String          Only on error

Result codes
201             Login successfully
401             Incorrect user name or password
400             Bad request


# Delete account

DELETE base-url/user

Used to permanetly delete an account.

Requires authorization token. (This token identifies the user to be deleted)

No request body

No response body on success

Response body
err             String          Only on error

Result codes
200             Deleted user successfully
401             Bad token
404             Could not find user
500             Internal server error


# Start game

POST base-url/play/start

Used to trigger the start of the game

Requires authorization token. (Used to identify user id to tie the game to)

Request body
n               Int             Optional (used to set number of rules, defaults to 4)

Response body
(Just an array of rule id's on success)
err             String          Only on error

Result codes
200             Successfully created game
401             Bad token
500             Internal server error


# Making a guess

POST base-url/play/guess

Used to take a guess on a single rule. Uses token to identify user. Increases user's number of guesses by 1. 

Requires authorization token. (Used to identify user id and their current game)

Request body
a               Int             Required (Must be between 1 to 5 inclusive)
b               Int             Required (Must be between 1 to 5 inclusive)
c               Int             Required (Must be between 1 to 5 inclusive)
r               Int             Required (Must be between 0 to n - 1 inclusive, where n is the number of rules. r is the index for the rule's id in the array returned by the start game)

Response body
result          Boolean         Whether if the guess was verified correct. 

Result codes
200             Valid guess format (Check result body to see if guess was correct)
400             Invalid guess (Could be invalid parameter or the game hasn't started)
401             Bad Token


# Attempting to solve

POST base-url/play/solve

Used to submit a final answer. On correct, increases user's number of solves by 1. On incorrect, increases user's number of guesses by 10.

Requires authorization token. (Used to identify user to update stats)

Request body
a               Int             Required (Must be between 1 to 5 inclusive)
b               Int             Required (Must be between 1 to 5 inclusive)
c               Int             Required (Must be between 1 to 5 inclusive)

Response body
result          Boolean         Whether if the guess was solve correct. 

Result codes
200             Valid guess format (Check result body to see if guess was correct)
400             Invalid guess (Could be invalid parameter or the game hasn't started)
401             Bad Token


# Getting leaderboard

GET base-url/stats

Used to get the leadboard of top users.

Request body
skip           Int             Used in pagenation
limit          Int             Used to

Response body
An array of scores with stats with this format
{
    user:
    name:
    score:
    totalGuesses
}


# Getting User score

GET base-url/stats/user

# Reset your score

DELETE base-url/stats