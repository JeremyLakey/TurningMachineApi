const express = require('express')
const playRoutes = express.Router()


const UserModel = require('../model/schema/userSchema')
const StatsModel = require('../model/schema/statsSchema')
const GameModel = require('../model/schema/gameSchema')

const gameGenerater = require('../model/game')
const tokenUtil = require('../utils/authToken')
const bodyParser = require('body-parser')

playRoutes.post("/start", [tokenUtil.validateAccessToken, bodyParser.json()], async (req, res) => {
    let numRules = 4
    console.log(req.body)
    if (req.body && req.body.n && req.body.n >=4 && req.body.n <=6) {
        numRules = req.body.n
    }
    const game = (gameGenerater(numRules))

    try {  
        let currentGame = await GameModel.findOne({user:req.user.id})
        if (currentGame) { 
            
            StatsModel.updateOne({user:req.user.id}, {$inc: {"totalGuesses": 10}})
            GameModel.updateOne({user:req.user.id}, {user: req.user.id, name:req.user.name, rules: game.rules, modes: game.modes})
            
            res.status(200)
            res.send(game.rules)

        }
        else {
            GameModel.create({user: req.user.id, name:req.user.name, rules: game.rules, modes: game.modes})

            res.status(200)
            res.send(game.rules)

        }
    } catch(err) {
        res.status(500)
        res.send({error:err})
    }

    
})



playRoutes.post("/guess", [tokenUtil.validateAccessToken, bodyParser.json()], async(req, res) => {
    // takes number and verifier



    // verify valid number

    // verify on verifier

    // returns pass or not

    res.status(418)
})

// if wrong, costs guesses equal to number of verifiers
playRoutes.post("/solve", [tokenUtil.validateAccessToken, bodyParser.json()], async(req, res) => {
    // takes number

    //verifiy with each verifier

    //update stats and game record
    
    res.status(418)
})

module.exports = playRoutes