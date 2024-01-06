const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema ({
    id: Schema.Types.ObjectId,
    name: { type: String, unique: true },
    password: String,
})

const UserModel = mongoose.model("User", UserSchema)

module.exports = UserModel