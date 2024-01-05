const mongoose = require('mongoose')
const config = require('../config.json')

mongoose.set("strictQuery", false);

var mongoDBConnection;

const connect = async () => {
    if (mongoDBConnection) {
        return mongoDBConnection
    }
    mongoDBConnection = await mongoose.connect(config.mongoDBPath);
    return mongoDBConnection
}

module.exports = connect
