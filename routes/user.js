const express = require('express')
const bodyParser = require('body-parser')
const UserModel = require('../model/schema/userSchema')
const StatsModel = require('../model/chema/statsSchema')
const userRoutes = express.Router()
const salty = require('../utils/salty')
const tokenUtil = require('../utils/authToken')

userRoutes.post('/', bodyParser.json(), async (req, res) => {
    console.log(req.body)
    if(req.body && req.body.name && req.body.password && req) {
        try {  
            let user = await UserModel.create({name:req.body.name, password: await salty.saltPassword(req.body.password)})
            await StatsModel.create({user:id, name: user.name})
            res.status(201)
            res.send({message:"success"})
        }
        catch (err) {
            console.log(err)
            res.status(409)
            res.send({err:"Could not create user"})
        }
    }
    else {
        res.status(400)
        res.send({err:"Bad Request"});
    }
    
})

userRoutes.post('/login', bodyParser.json(), async (req, res) => {
    if(req.body && req.body.name) {
        const name = req.body.name
        let user = await UserModel.findOne({name:name})

        if (req.body.password && user && await salty.validateUser(req.body.password, user.password)) {
            let token = tokenUtil.generateAccessToken(name)
            res.status(201)
            res.send(token)
        }
        else {
            console.log(req.body)
            res.status(403)
            res.send({err:"Not Authorized"})
        }
    }
    else {
        res.status(400)
        res.send({err:"Bad Request"});
    }
    
})

userRoutes.delete('/', tokenUtil.validateAccessToken, async (req, res) => {
    let result = await UserModel.deleteOne(req.user.name)
    if (result.deletedCount <= 0) {
        res.status(404)
        res.send({err:"Nothing was deleted"})
        return
    }
    await StatsModel.deleteOne(req.user.name)

    res.status(200)
    res.send(req.user)
})

module.exports = userRoutes