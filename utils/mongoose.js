const mongoose = require('mongoose')
const config = require('../config.json')

mongoose.set("strictQuery", false);

const mongoDB = config.mongoDBPath;


const connect = async () => {

    const connection = await mongoose.connect(mongoDB);
    return connection
}

module.exports = connect
