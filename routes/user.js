const express = require('express')
const UserModel = require('../model/schema/userSchema')
const StatsModel = require('../model/schema/statsSchema')
const GameModel = require('../model/schema/gameSchema')
const userRoutes = express.Router()
const salty = require('../utils/salty')
const tokenUtil = require('../utils/authToken')

// create user
userRoutes.post('/', express.json(), async (req, res) => {
    if(req.body && req.body.name && req.body.password) {
        try {  
            let user = await UserModel.create({name:req.body.name, password: await salty.saltPassword(req.body.password)})
            await StatsModel.create({user: user._id, name: user.name})
            let token = tokenUtil.generateAccessToken(name, user._id)
            res.status(201)
            res.send(token)
        }
        catch (err) {
            console.log(err)
            res.status(403)
            res.send({err:"Could not create user: " + err})
        }
    }
    else {
        res.status(400)
        res.send({err:"Bad Request"});
    }
    
})

// login user
userRoutes.post('/login', express.json(), async (req, res) => {
    if(req.body && req.body.name) {
        const name = req.body.name
        let user = await UserModel.findOne({name:name})

        if (req.body.password && user && await salty.validateUser(req.body.password, user.password)) {
            let token = tokenUtil.generateAccessToken(name, user._id)
            res.status(201)
            res.send(token)
        }
        else {
            console.log(req.body)
            res.status(401)
            res.send({err:"Not Authorized"})
        }
    }
    else {
        res.status(400)
        res.send({err:"Bad Request"});
    }
    
})


// delete user
userRoutes.delete('/', tokenUtil.validateAccessToken, async (req, res) => {

    try {
        
        let result = await UserModel.deleteOne({name: req.user.username})
        if (result.deletedCount <= 0) {
            res.status(404)
            res.send({err:"Nothing was deleted"})
            return
        }
        await StatsModel.deleteOne({user: req.user.id})
        
        await GameModel.deleteOne({user: req.user.id})
    
        res.status(200)
        res.send(req.user)
    } catch (err) {
        console.log("Error deleting user: " + err)
        res.status(500)
        res.send({err:"Could not delete user"})
    }
})

module.exports = userRoutes