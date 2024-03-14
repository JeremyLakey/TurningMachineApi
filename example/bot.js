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
    let gameData = await api.startGame()

    console.log(gameData)



    await api.guess(1,1,1,1)
    
    await api.guess(1,1,1,2)

    await api.guess(1,1,1,3)
    
    await api.guess(1,1,1,0)
}


bot()











