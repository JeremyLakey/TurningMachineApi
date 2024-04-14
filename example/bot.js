const config = require("./config.json")
const axios = require('axios')
const client = require("tm-bot-client")

const runGames = async () => {
    client.setDebugMode(true)
    client.setBaseUrl(config.url)
    if (config.create) {
        await client.createAccount(config.username, config.password)
    }
    else {
        await client.doLogin(config.username, config.password)
    }

    
    console.log(await client.getLeaderBoard())

    if (config.reset) {
        console.log(await client.resetScore())
    }

    for (let i = 0; i < config.numGames; i++) {
        await bot()
    }
    
    console.log(await client.getScore(config.username))

    if (config.delete) {
        await client.deleteAccount()
    }
}

const bot = async () => {
    
    let numRules = Math.floor(Math.random() * 3 + 4)
    let ruleNums = await client.startGame(numRules)

    console.log(ruleNums)
    for (let i = 0; i < ruleNums.length; i++) {
        console.log(client.getDescription(i) + '\n')
    }

    let result = await guessAllNumbers(numRules)

    console.log(result)
    console.log(await client.solve(result[0], result[1], result[2]))
    

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
        let result = await client.guess(a,b,c,i)
        if (!result) {
            return false
        }
        
    }
    return true
}

runGames()











