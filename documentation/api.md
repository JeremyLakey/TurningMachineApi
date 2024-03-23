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
token           String

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
token           String

Result codes
201             Login successfully
401             Incorrect user name or password
400             Bad request



# Delete account

DELETE base-url/user

Used to permanetly delete an account.

Requires authorization token. This token identifies the user to be deleted

Result codes
200             Deleted user successfully
401             Bad token
404             Could not find user
500             Internal server error

# Start game

POST base-url/play/start

# Making a guess

POST base-url/play/guess

# Attempting to solve

POST base-url/play/solve

# Getting leaderboard

GET base-url/stats

# Getting User score

GET base-url/stats/user

# Reset your score

DELETE base-url/stats