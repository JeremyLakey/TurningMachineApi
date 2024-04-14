const rules = require("./rules.js")
const axios = require('axios')

var token;
var baseUrl;
var doLogging = false;

const doLog = (log) => {
    if (doLogging) console.log(log)
}

const maybeWarn = (needToken = false) => {
    if (needToken && !token) {
        doLog("Need to get token first")
        throw new Error("Need to get token")
    }
    if (!baseUrl) {
        doLog("Set up base url first")
        throw new Error("Need to get token")
    }
}

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

const getNumModes = (r) => {
    return rules[r].maxMode
}

const createAccount = async (username, password) => {
    maybeWarn()
    try {
        await axios.post(baseUrl + "/user",{
            name: username,
            password: password,
          }).then((response) => {
            token = response.data
            doLog("Created Account. AuthToken: " + token)
            return token
          })
    } catch (err) {
        doLog('Create Account error ' + err)
        return undefined
    }
}

const deleteAccount = async () => {
    maybeWarn(true)
    const headers = {
        'Authorization': 'Bearer ' + token
    }
    try {
        await axios.delete(baseUrl + "/user", {
            headers: headers
          })
        return true
    } catch (err) {
        doLog('Delete Account error: ' + err)
        return false
    }
}

const doLogin = async (username, password) => {
    maybeWarn()
    try {
        await axios.post(baseUrl + "/user/login",{
            name: username,
            password: password,
            }).then((response) => {
                token = response.data
                doLog("Login complete. AuthToken: " + token)
                return token
            })
    } catch (err) {
        doLog('Login error: ' + err)
        return undefined
    }
}

const setToken = async (t) => {
    if (typeof t === 'string') {
        token = t
    }
    else {
        throw new Error("token must be of type 'String'")
    }
}


const startGame = async (n=4) => {
    maybeWarn(true)
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
        doLog('start error: ' + err)
        return []
    }
}

const guess = async (a, b, c, r) => {
    maybeWarn(true)
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
        doLog("guess error: rule:" + r + " error:" + err)
        return false
    }
}

const solve = async (a, b, c) => {
    maybeWarn(true)
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
        doLog("Solve error : " + err)
        return false
    }
}

const getLeaderBoard = async (num = 10, skip = 0) => {
    maybeWarn()
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
        doLog("Get Leader Board error: " + err)
        return false
    }
}

const getScore = async (username) => {
    maybeWarn()
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
        doLog("Get Leader Board error: " + err)
        return false
    }
}

const resetScore = async () => {
    maybeWarn(true)
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
        doLog("Reset Score error: " + err)
        return false
    }
}

const setDebugMode = (mode = true) => {
    if (typeof mode === 'boolean') {
        doLogging = mode
    }
    else {
        throw new Error("Error in setDebugMode(mode). mode msut be 'boolean' type")
    }
}


module.exports = {
    setBaseUrl,
    getRules,
    checkRule,
    getDescription,
    getNumModes,
    createAccount,
    deleteAccount,
    doLogin,
    startGame,
    guess,
    solve,
    resetScore,
    getScore,
    getLeaderBoard,
    setDebugMode,
    setToken,
}