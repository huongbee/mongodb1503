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

// User.insertMany([
//     {
//         username: 'teonguyen',
//         password: '12345678'
//     },
//     {
//         username: 'tinguyen',
//         password: '12345678'
//     }
// ])
// .then(users=>console.log(users))
// .catch(err=>console.log(err))

// SELECT * FROM users 
// User.find((err,res)=>{
//     if(err) return;
//     console.log(res)
// })

// User.find()
// .then(users=>console.log(users))
// .catch(err=>console.log(err))

// SELECT * FROM users LIMIT 0,1
// User.findOne()
// .then(user=>console.log(user))
// .catch(err=>console.log(err))

// SELECT * FROM users WHERE id='12343' 
//5cb082737db7a60795a24a9d
// User.findById('5cb082737db7a60795a24a9d')
// .then(user=>console.log(user))
// .catch(err=>console.log('Error: '+err.message))

//SELECT * FROM users WHERE phone='098754321' AND username='admin'
// User.findOne({
//     phone: '098754321',
//     username: 'admin'
// })
// .then(users=>console.log(users))
// .catch(err=>console.log(err))

// SELECT * FROM users 
// WHERE (username='guest' OR username='admin') 
// AND password = '9876543'
User.find({
    $or :[ {
        username:'admin'
    },{
        username:'guest'
    }],
    password: {
        $eq : '9876543'
    }
})
.then(users=>console.log(users))
.catch(err=>console.log(err))

/**
 * Create collection
 * Insert one/ insert many
 * Select
 * Update
 * Delete
 */

