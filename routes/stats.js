const express = require('express')
const StatsModel = require('../model/schema/statsSchema')
const tokenUtil = require('../utils/authToken')

const statsRoutes = express.Router()


const scrubStat = (stat) => {
    delete stat.user
    delete stat._id
    delete stat.__v
    console.log(stat)
}

statsRoutes.get("/", express.json(), async (req, res) => {
    console.log("Getting leaderboard")
    let skip = 0
    let limit = 10
    if (req.body) {
        if (req.body.skip && req.body.skip > 0) {
            skip = req.body.skip
        }
        if (req.body.limit && req.body.limit > 0 && req.body.limit <= 100) {
            limit = req.body.limit
        }
    }
    try {

        const results = await StatsModel.find().limit(limit).sort({ score: 'desc',}).skip(skip)
        let stats = []
        for (result in results) {
            let stat = result.toObject()
            scrubStat(stat)
            stats.push(stat)
        }
        res.status(200)
        res.send(results)
    } catch (err) {
        res.status(500)
        res.send({err:"Error getting leaderboard"})
        console.log("Leaderboard critial error:" + err)
    }
})

statsRoutes.get("/user", express.json(), async (req, res) => {

    if (!req.body || !req.body.name) { 
        res.status(400)
        res.send({err:"Need name"})
    }

    try {
        const result = await StatsModel.findOne({name:req.body.name})
        if (result) {  
            let stat = result.toObject()
            scrubStat(stat)
            res.status(200)
            res.send(stat)
        }
        else {
            res.status(404)
            res.send({err:"Could not find user"})
        }
    } catch (err) {
        res.status(500)
        res.send({err:"Error finding user"})
    }

})

statsRoutes.delete("/reset", tokenUtil.validateAccessToken, async (req, res) => {
    try {
        let result = await StatsModel.findOneAndUpdate({name:req.user.username}, {score:0, solves:0, totalGuesses: 0})
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send({err:"Could not reset score: " + err})
    }
        
})

module.exports = statsRoutes