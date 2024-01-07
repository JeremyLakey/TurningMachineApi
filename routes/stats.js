const express = require('express')
const bodyParser = require('body-parser')
const StatsModel = require('../model/schema/statsSchema')
const tokenUtil = require('../utils/authToken')

const statsRoutes = express.Router()

statsRoutes.get("/", bodyParser.json, async (req, res) => {
    let skip = 0;
    let limit = 10;
    if (req.body) {
        if (req.body.skip && req.body.skip > 0) {
            skip = req.body.skip
        }
        if (req.body.limit && req.body.limit > 0 && req.body.limit <= 100) {
            limit = req.body.limit
        }
    }
    const results = StatsModel.find().limit(limit).sort({ score: 'desc',}).skip(skip)

    console.log(results)

    res.status(200)
    res.send([{numGames: 0, totalGuesses: 0, averageGuesses: 0}])
})

// TODO: Get's user score
statsRoutes.get("/user", bodyParser.json, async (req, res) => {

    if (!req.body || !req.body.name) { 
        res.status(400)
        res.send({err:"Need name"})
    }

    const result = await StatsModel.findOne({name:req.body.name})
    if (result) {  
        res.status(200)
        res.send(result)
    }
    else {
        res.status(404)
        res.sent({err:"Could not find user"})
    }

})

statsRoutes.delete("/reset", [tokenUtil.validateAccessToken, bodyParser.json], async (req, res) => {
    let result = await StatsModel.findOneAndUpdate({name:req.user.name}, {score:0, solves:0, totalGuesses: 0})
    res.send(result)
})

module.exports = statsRoutes