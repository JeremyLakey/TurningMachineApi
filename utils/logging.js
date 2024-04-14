const config = require('../config.json')

const logging = (text) => {
    if (config.debugMode) console.log(text);
}

module.exports = logging