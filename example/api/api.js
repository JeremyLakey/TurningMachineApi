const rules = require("./rules.js")
const axios = require('axios')

var token;
var baseUrl;

const setBaseUrl = (url) => {
    baseUrl = url
}

const getRules = () => {
    return rules
}

const checkRule = (a, b, c, r, m) => {
    return rules[r].rule(a, b, c, m)
}

const getDescription = (r) => {
    return rules[r].description
}

const getMaxMode = (r) => {
    return rules[r].maxMode
}

const createAccount = async (username, password) => {
    try {
        await axios.post(baseUrl + "/user",{
            name: username,
            password: password,
          }).then((response) => {
              console.log(response.data)
          })
    } catch (err) {
        console.log('Create Account error ' + err)
    }
}

const deleteAccount = async () => {
    const headers = {
        'Authorization': 'Bearer ' + token
    }
    try {
        await axios.delete(baseUrl + "/user", {
            headers: headers
          })
    } catch (err) {
        console.log('Delete Account error: ' + err)
    }
}

const doLogin = async (username, password) => {
    try {
        await axios.post(baseUrl + "/user/login",{
            name: username,
            password: password,
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
        result = await axios.post(baseUrl + "/play/start", body, {
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
        const result = await axios.post(baseUrl + "/play/guess", body, {
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
        const result = await axios.post(baseUrl + "/play/solve", body, {
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
            url: baseUrl + "/stats",
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
            url: baseUrl + "/stats/user",
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
        const result = await axios.delete(baseUrl + "/stats/reset", {
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
    setBaseUrl,
    getRules,
    checkRule,
    getDescription,
    getMaxMode,
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