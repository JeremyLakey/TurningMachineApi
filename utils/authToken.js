const config = require("../config.json")
const secret = config.secret

const jwt = require('jsonwebtoken');

const generateAccessToken = (username, id) => {
    return jwt.sign({username:username, id}, secret, { expiresIn: '1800s' });
}

const validateAccessToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) return res.sendStatus(401)

    jwt.verify(token, secret, (err, user) => {
        console.error(err)

        if (err) return res.sendStatus(403)

        req.user = user

        next()
    })
}


module.exports = {
    generateAccessToken: generateAccessToken,
    validateAccessToken: validateAccessToken,
}