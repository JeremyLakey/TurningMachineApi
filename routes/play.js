const express = require('express')
const playRoutes = express.Router()

const StatsModel = require('../model/schema/statsSchema')
const GameModel = require('../model/schema/gameSchema')

const gameGenerater = require('../model/game')
const tokenUtil = require('../utils/authToken')

const rules = require('../model/rules/rule')

playRoutes.post("/start", [tokenUtil.validateAccessToken, express.json()], async (req, res) => {
    let numRules = Math.floor(Math.random() * 3 + 4)
    console.log("Starting game")
    console.log(req.body)
    if (req.body && req.body.n && req.body.n >=4 && req.body.n <=6) {
        numRules = req.body.n
    }
    const game = (gameGenerater(numRules))

    try {  
        let currentGame = await GameModel.findOne({user:req.user.id})
        if (currentGame) { 
            let stat = await StatsModel.findOne({user:req.user.id})
            await StatsModel.updateOne({user:req.user.id}, {totalGuesses: stat.totalGuesses + 10})
            await GameModel.updateOne({user:req.user.id}, {user: req.user.id, name:req.user.name, rules: game.rules, modes: game.modes})
            
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


const validateGuess = (body) => {
    return body && typeof body.a !== 'undefined' && body.a >= 1 && body.a <= 5 && typeof body.b !== 'undefined' && body.b >= 1 && body.b <= 5 && typeof body.c !== 'undefined' && body.c >= 1 && body.c <= 5
}

playRoutes.post("/guess", [tokenUtil.validateAccessToken, express.json()], async(req, res) => {
    // takes number and verifier
    if (!validateGuess(req.body)) {
        res.status(400)
        res.send({err: "Invalid number"})
        return
    }

    const game = await GameModel.findOne({user: req.user.id});

    if (!game) {
        res.status(400)
        res.send({err: "Start Game First"})
        return
    }

    if (typeof req.body.r === 'undefined' || req.body.r < 0 || req.body.r >= game.rules.length) {
        console.log(game.rules.length)
        console.log(req.body)
        console.log(!req.body.r)
        console.log(req.body.r < 0)
        console.log(req.body.r >= game.rules.length)
        res.status(400)
        res.send({err: "Invalid Guess"})
        return
    }
    
    await StatsModel.updateOne({user:req.user.id}, {$inc: {totalGuesses: 1}})

    // verify on verifier
    if (rules[game.rules[req.body.r]].rule(req.body.a, req.body.b, req.body.c, game.modes[req.body.r])) {
        //console.log("Correct " + req.body.a + " " + req.body.b + " " + req.body.c)
        res.status(200)
        res.send({result:true})
        return
    }

    // returns pass or not
    
    //console.log("Wrong " + req.body.a + " " + req.body.b + " " + req.body.c)
    res.status(200)
    res.send({result:false})
})

// if wrong, costs guesses equal to number of verifiers
playRoutes.post("/solve", [tokenUtil.validateAccessToken, express.json()], async(req, res) => {
    
    try {
        if (!validateGuess(req.body)) {
            res.status(400)
            res.send({err: "Invalid number"})
            return
        }

        const game = await GameModel.findOne({user: req.user.id});

        if (!game) {
            res.status(400)
            res.send({err: "Start Game First"})
            return
        }
        
        let passedAll = true
        for (let i = 0 ; i < game.rules.length; i++) {
            if (!rules[game.rules[i]].rule(req.body.a, req.body.b, req.body.c, game.modes[i])) {
                passedAll = false;
                break
            }
        }

        if (passedAll) {
            console.log("Passed solve!")
            await GameModel.deleteOne({user:req.user.id})
            let stats = await StatsModel.findOne({user:req.user.id})
            stats.solves += 1
            let score = stats.solves / stats.totalGuesses
            if (stats.solves < 100) {
                score = 0
            }
            await StatsModel.updateOne({user:req.user.id}, {score:score * 100, solves: stats.solves})
            res.status(200)
            res.send({result:true})
            return
        }
        console.log("Failed solve!")
    

        // failure
        await StatsModel.updateOne({user:req.user.id}, {$inc: {totalGuesses: 10}})
    
        res.status(200)
        res.send({result:false})
    } catch (err) {
        console.log("Critial error solving game: " + err)
        res.status(500)
        res.send({err:"Did not finish checking answer"})
    }
})

module.exports = playRoutes