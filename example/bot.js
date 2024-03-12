const rules = require("./rules.js")
const config = require("./config.json")
const axios = require('axios')
const api = require("./api.js")

const bot = async () => {
    if (config.create) {
        // create
        await api.createAccount()
    }
    
    await api.doLogin()
    await api.startGame()
}


bot()











