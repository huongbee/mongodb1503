const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/mongoose1503',{
    'useNewUrlParser': true
});
mongoose.connection
.then(()=>{
    console.log('DB Connected!')
})
.catch(err=>console.log(err.message))

const Schema = mongoose.Schema
const UserSchema = new Schema({
    username: {
        type:String,
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