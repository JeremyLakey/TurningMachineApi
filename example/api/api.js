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
        console.log('Create Account error ' + err)
    }
}

// TODO
const deleteAccount = async () => {
    const headers = {
        'Authorization': 'Bearer ' + token
    }
    try {
        await axios.delete(config.url + "/user", {
            headers: headers
          })
    } catch (err) {
        console.log('Delete Account error: ' + err)
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
        console.log('Login error: ' + err)
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
        console.log("guess error: rule:" + r + " error:" + err)
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
        console.log("Solve error : " + err)
        return false
    }
}

const getLeaderBoard = async (num = 10, skip = 0) => {
    try {
        const options = {
            method: "GET",
            url: config.url + "/stats",
            headers: {
                'content-type': 'application/json',
            },
            data: {
                    skip: skip,
                    limit: num,
                },
        }

        const result = await axios.request(options)
        return result.data
    }
    catch (err) {
        console.log("Get Leader Board error: " + err)
        return false
    }
}

const getScore = async (username) => {
    try {
        const options = {
            method: "GET",
            url: config.url + "/stats/user",
            headers: {
                'content-type': 'application/json',
            },
            data: {
                    name: username
                },
        }

        const result = await axios.request(options)
        return result.data
    }
    catch (err) {
        console.log("Get Leader Board error: " + err)
        return false
    }
}

const resetScore = async () => {
    const headers = {
        'Content-Type':'application/json', 
        'Authorization': 'Bearer ' + token
    }
    try {
        const result = await axios.delete(config.url + "/stats/reset", {
            headers: headers
        })
        return result.data
    }
    catch (err) {
        console.log("Reset Score error: " + err)
        return false
    }
}



module.exports = {
    createAccount,
    deleteAccount,
    doLogin,
    startGame,
    guess,
    solve,
    resetScore,
    getScore,
    getLeaderBoard,
}