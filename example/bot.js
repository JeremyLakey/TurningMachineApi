const rules = require("./rules.js")
const config = require("./config.json")
const axios = require('axios')




if (config.create) {
    // create

    axios.post(config.url + "/user",{
          name: config.username,
          password: config.password,
        }).then((response) => {
            console.log(response.data)
        })
}
else {
    // login
    
    axios.post(config.url + "/user/login",{
        name: config.username,
        password: config.password,
      }).then((response) => {
          console.log(response.data)
      })
}
