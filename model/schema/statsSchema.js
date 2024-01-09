const mongoose = require("mongoose")
const Schema = mongoose.Schema

const StatsSchema = new Schema ({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    name: String,
    score: {type: Number, min: 0, default: 0},
    solves: {type: Number, min: 0, default: 0},
    totalGuesses: {type: Number, min: 0, default: 0},
})

const StatsModel = mongoose.model("Stats", StatsSchema)

module.exports = StatsModel