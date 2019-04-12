const mongoose = require('mongoose')
const Schema = mongoose.Schema
const CustomerSchema = new Schema({
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
const Customer = mongoose.model('customer',CustomerSchema)
module.exports = Customer