const express = require('express')
const bodyParser = require('body-parser')
const UserModel = require('../model/schema/userSchema')
const userRoutes = express.Router()

userRoutes.post('/', bodyParser.json(), async (req, res) => {
    console.log(req.body)
    if(req.body) {
        let user = await UserModel.create({name:req.body.name, password: req.body.password})
        //await UserModel.updateOne(user)
        res.send({id:req.body.id, name:req.body.name, password: req.body.password})
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