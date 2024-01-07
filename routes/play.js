const express = require('express')
const playRoutes = express.Router()

playRoutes.post("/start", async (req, res) => {
    // check if game exists

    // create one if it doesn't, or update it if it does

})



playRoutes.post("/guess", async(req, res) => {
    // takes number and verifier

    // verify valid number

    // verify on verifier

    // returns pass or not
})

// if wrong, costs guesses equal to number of verifiers
playRoutes.post("/solve", async(req, res) => {
    // takes number

    //verifiy with each verifier

    //update stats and game record
})

module.exports = playRoutes