const mongoose = require('mongoose')
const Schema = mongoose.Schema
const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        require:true
    },
    password : {
        type : String,
        require:true
    },
    birthdate: Date,
    phone:{
        type: String,
        default: '098754321'
    }
})
const User = mongoose.model('user',UserSchema)
module.exports = User