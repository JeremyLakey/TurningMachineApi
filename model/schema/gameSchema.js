const mongoose = require("mongoose")
const Schema = mongoose.Schema

const GameSchema = new Schema ({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    guesses: Number,
    rules: [{type: Number, min: 0, max: 48}],
    mode: [{type: Number, min: 0, max: 9}]
})

const GameModel = mongoose.model("Game", GameSchema);
