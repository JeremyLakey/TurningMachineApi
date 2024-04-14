const express = require('express')
const StatsModel = require('../model/schema/statsSchema')
const tokenUtil = require('../utils/authToken')
const logging = require('../utils/logging')

const statsRoutes = express.Router()


const scrubStat = (stat) => {
    delete stat.user
    delete stat._id
    delete stat.__v
    logging(stat)
}

statsRoutes.get("/", express.json(), async (req, res) => {
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
        for (const result of results) {
            let stat = result.toObject()
            scrubStat(stat)
            stats.push(stat)
        }
        logging("Sent leaderboard data:")
        logging(results)
        res.status(200)
        res.send(results)
    } catch (err) {
        logging("Leaderboard critial error:" + err)
        res.status(500)
        res.send({err:"Error getting leaderboard"})
    }
})

statsRoutes.get("/user", express.json(), async (req, res) => {

    if (!req.body || !req.body.name) { 
        logging("Missing name in request body")
        res.status(400)
        res.send({err:"Need name"})
    }

    try {
        const result = await StatsModel.findOne({name:req.body.name})
        if (result) {  
            let stat = result.toObject()
            scrubStat(stat)
            logging("Sending stat for user " + req.body.name)
            logging(stat)
            res.status(200)
            res.send(stat)
        }
        else {
            logging("Could not find user's stats")
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
        logging("Resetting " + req.user.username + "'s stats")
        res.send(result)
    } catch (err) {
        logging("Could not reset stats for " + req.user.username)
        res.status(500)
        res.send({err:"Could not reset score: " + err})
    }
        
})

module.exports = statsRoutes