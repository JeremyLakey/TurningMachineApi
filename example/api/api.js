const rules = require("../rules.js")
const config = require("../config.json")
const axios = require('axios')


var token;

const createAccount = async () => {
    try {
        await axios.post(config.url + "/user",{
            name: config.username,
            password: config.password,
          }).then((response) => {
              console.log(response.data)
          })
    } catch (err) {
        console.log(err)
    }
    
}

const doLogin = async () => {
    try {
        await axios.post(config.url + "/user/login",{
            name: config.username,
            password: config.password,
            }).then((response) => {
                token = response.data
            })
    } catch (err) {
        console.log(err)
    }
    
}


const startGame = async (n=4) => {
    const body = {
        'n':n
    }
    const headers = {
        'Content-Type':'application/json', 
        'Authorization': 'Bearer ' + token
    }
    try {
        result = await axios.post(config.url + "/play/start", body, {
            headers: headers
        })
        return result.data
    } catch (err) {
        console.log('start error: ' + err)
    }
}

const guess = async (a, b, c, r) => {
    const body = {
        'a':a,
        'b':b,
        'c':c,
        'r':r,
    }
    const headers = {
        'Content-Type':'application/json', 
        'Authorization': 'Bearer ' + token
    }
    try {
        
        const result = await axios.post(config.url + "/play/guess", body, {
            headers: headers
        })
        return result.data.result
    }
    catch (err) {
        console.log("guess error for " + r + " " + err)
        return false
    }
}

const solve = async (a, b, c) => {
    const body = {
        'a':a,
        'b':b,
        'c':c,
    }
    const headers = {
        'Content-Type':'application/json', 
        'Authorization': 'Bearer ' + token
    }
    try {
        
        const result = await axios.post(config.url + "/play/solve", body, {
            headers: headers
        })
        return result.data.result
    }
    catch (err) {
        console.log("Solve error for " + r + " " + err)
        return false
    }
}


module.exports = {
    createAccount,
    doLogin,
    startGame,
    guess,
    solve
}