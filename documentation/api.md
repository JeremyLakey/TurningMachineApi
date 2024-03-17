# Explanation
This is a fan project inspired by the game Turning Machine published by Scorpion and designed by Manuel Sanchez. I'm not affliated with them in any way. Learn more about Turn Machine at this url. (https://www.turingmachine.info/). The main point of this API/project is to test bots and ai for a game simular to Turning Machine (I'm might add additional rules and change rules to add challenge for the bots). 

Each of these endpoints have a base url, depending on where the server is hosted. 

Just replace "base-url" with the real url.


# Create an account

POST base-url/user

# Login to account

POST base-url/user/login

# Delete account

DELETE base-url/user

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