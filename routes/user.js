const express = require('express')
const bodyParser = require('body-parser')
const UserModel = require('../model/schema/userSchema')
const userRoutes = express.Router()
const salty = require('../utils/salty')

userRoutes.post('/', bodyParser.json(), async (req, res) => {
    console.log(req.body)
    if(req.body) {
        let user = await UserModel.create({name:req.body.name, password: await salty.saltPassword(req.body.password)})
        res.send(user)
    }
    else {
        res.status(400)
        res.send({err:"oof"});
    }
    
})

userRoutes.post('/login', bodyParser.json(), async (req, res) => {
    console.log(req.body)
    if(req.body) {
        let user = await UserModel.findOne({name:req.body.name})
        if (req.body.password && await salty.validateUser(req.body.password, user.password)) {
            res.send(user)
        }
        else {
            res.status(403)
            res.send({err:"Something be wrong"})
        }
    }
    else {
        res.status(400)
        res.send({err:"oof"});
    }
    
})

userRoutes.get('/', async (req, res) => {
    res.send({id:0, name:"Henry"})
})

module.exports = userRoutes