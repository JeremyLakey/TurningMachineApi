
const bcrypt = require("bcrypt")
const saltRounds = 10

const saltPassword = async (password) => {
    return await bcrypt.hash(password, saltRounds).then((hash) => {return hash}).catch((err) => console.error(err))
}

const validateUser = async (password, hash) => {
    return bcrypt
      .compare(password, hash)
      .then(result => {
        return result
      })
      .catch(err => {
        console.error(err.message)
         return false
        })        
}

module.exports = {
    saltPassword: saltPassword,
    validateUser: validateUser
}

