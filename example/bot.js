const rules = require("./rules.js")
const config = require("./config.json")
const axios = require('axios')
const api = require("./api/api.js")

const runGames = async () => {
    if (config.create) {
        // create account first
        await api.createAccount()
    }

    await api.doLogin()

    
    console.log(await api.getLeaderBoard())

    if (config.reset) {
        // reset first
        console.log(await api.resetScore())
    }

    for (let i = 0; i < config.numGames; i++) {
        await bot()
    }
    
    console.log(await api.getScore(config.username))
}

const bot = async () => {
    
    let numRules = Math.floor(Math.random() * 3 + 4)
    let ruleNums = await api.startGame(numRules)


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
    console.log("Oof")
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











