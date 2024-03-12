const rules = require("./rules.js")
const config = require("./config.json")
const axios = require('axios')


var token;

const createAccount = async () => {
    await axios.post(config.url + "/user",{
        name: config.username,
        password: config.password,
      }).then((response) => {
          console.log(response.data)
      })
}

const doLogin = async () => {
    await axios.post(config.url + "/user/login",{
    name: config.username,
    password: config.password,
    }).then((response) => {
        token = response.data
    })
}


const startGame = async () => {
    const body = {
        'c':3
    }
    const headers = {
        'Content-Type':'application/json', 'Authorization': token
    }
    await axios.post(config.url + "/play/start", body, {
        headers: headers
    })
}


module.exports = {
    createAccount,
    doLogin,
    startGame
}