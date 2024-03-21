const rules = require("./api/rules.js")
const config = require("./config.json")
const axios = require('axios')
const api = require("./api/api.js")

const runGames = async () => {
    api.setBaseUrl(config.url)
    if (config.create) {
        await api.createAccount(config.username, config.password)
    }

    await api.doLogin(config.username, config.password)

    
    console.log(await api.getLeaderBoard())

    if (config.reset) {
        console.log(await api.resetScore())
    }

    for (let i = 0; i < config.numGames; i++) {
        await bot()
    }
    
    console.log(await api.getScore(config.username))

    if (config.delete) {
        await api.deleteAccount()
    }
}

const bot = async () => {
    
    let numRules = Math.floor(Math.random() * 3 + 4)
    let ruleNums = await api.startGame(numRules)

    console.log(ruleNums)
    for (let i = 0; i < ruleNums.length; i++) {
        console.log(rules[ruleNums[i]].description + '\n')
    }

    let result = await guessAllNumbers(numRules)

    console.log(result)
    console.log(await api.solve(result[0], result[1], result[2]))
    

}

const guessAllNumbers = async (n) => {
    for (let a = 1; a <= 5; a++) {
        for (let b = 1; b <= 5; b++) {
            for (let c = 1; c <= 5; c++) {
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
        if (!result) {
            return false
        }
        
    }
    return true
}

runGames()











