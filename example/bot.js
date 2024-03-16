const rules = require("./rules.js")
const config = require("./config.json")
const axios = require('axios')
const api = require("./api/api.js")

const runGames = async () => {
    for (let i = 0; i < 10; i++) {
        await bot()
    }
}

const bot = async () => {
    if (config.create) {
        // create
        await api.createAccount()
    }
    
    await api.doLogin()
    let numRules = Math.floor(Math.random() * 3 + 4)
    let gameData = await api.startGame(numRules)

    console.log(gameData)
    let result = await guessAllNumbers(numRules)

    console.log(result)
    console.log(await api.solve(result[0], result[1], result[2]))
    

}

const guessAllNumbers = async (n) => {
    let a, b, c
    for (a = 1; a <= 5; a++) {
        for (b = 1; b <= 5; b++) {
            for (c = 1; c <= 5; c++) {
                console.log(a, b, c)
                if (await guessAllRules(a, b, c, n)) {
                    return [a, b, c]
                }
            }
        }
    }
    return [1, 1, 1]
}

const guessAllRules = async (a, b, c, n) => {
    for (let i = 0; i < n; i++) {
        let result = await api.guess(a,b,c,i)
        if (!result) return false
    }
    return true
}

runGames()











