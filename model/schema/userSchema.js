const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema ({
    id: Schema.Types.ObjectId,
    name: String,
    password: String,
})

const UserModel = mongoose.model("User", UserSchema);

