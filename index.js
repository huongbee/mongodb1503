const mongoose = require('mongoose')
const User = require('./models/User')

mongoose.connect('mongodb://127.0.0.1/mongoose1503',{
    'useNewUrlParser': true,
    'useCreateIndex': true
});
mongoose.connection
.then(()=>{
    console.log('DB Connected!')
})
.catch(err=>console.log(err.message))

//insert
// User.create({
//     username: 'manager',
//     password: '9876543',
//     birthdate: new Date(),
//     phone: '492002575'
// }).then(user=>console.log(user))
// .catch(err=>console.log(err.message))

// const user = new User({
//     username: 'guest04',
//     password: '9876543',
// }).save(err=>{
//     if(err) return console.log(err.message)
// })


/**
 * Create collection
 * Insert
 * Select
 * Update
 * Delete
 */

