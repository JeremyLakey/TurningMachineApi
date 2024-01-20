const mongoose = require("mongoose")
const Schema = mongoose.Schema

const GameSchema = new Schema ({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    name: String,
    rules: [{type: Number, min: 0, max: 48}],
    modes: [{type: Number, min: 0, max: 9}]
})

const GameModel = mongoose.model("Game", GameSchema)

module.exports = GameModel
