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
// User.find({
//     $or :[ {
//         username:'admin'
//     },{
//         username:'guest'
//     }],
//     password: {
//         $eq : '9876543'
//     }
// })
// .then(users=>console.log(users))
// .catch(err=>console.log(err))

// LIKE: $regex: ....  username LIKE 'guest%'
// User.find({
//     username:{
//         $regex: /^guest/
//     }
// })
// .then(users=>console.log(users))
// .catch(err=>console.log(err))

// LIKE: $regex: ....  username LIKE '%guest'

// User.find({
//     username:{
//         $regex: /guest$/
//     }
// })
// .then(users=>console.log(users))
// .catch(err=>console.log(err))

// User.find({
//     username:{
//         $regex: /^guest02$/
//     }
// })
// .then(users=>console.log(users))
// .catch(err=>console.log(err))

// LIKE: $regex: ....  username LIKE '%guest%'
// SELECT username FROM users
// WHERE username LIKE '%guest%'
// LIMIT 1,2
// User.find({
//     username:{
//         $regex: /guest/
//     }
// },{username:1, _id:0})
// .sort({username:-1}) // desc
// .skip(1)
// .limit(2) // 1,2
// .then(users=>console.log(users))
// .catch(err=>console.log(err))

// sort
// SELECT username, password FROM ....
// User.find({
//     username:{
//         $regex: /guest/
//     },
//     // totalAmount: { $sum : 'phone' }
// }).countDocuments()
// .then(number=>console.log(number))
// .catch(err=>console.log(err))

// Update
//ObjectId("5cb0850814ee8b08279cb2cd")
User.findByIdAndUpdate('5cb0850814ee8b08279cb2cd',{
    username: 'hoa_nguyen_1232345'
},{new : true})
// .then(user=>console.log(user))
// .catch(err=>console.log(err))

// User.findOne({username : 'hoa_nguyen'})
// .update({
//     username: 'hoa_nguyen_1232345'
// },(err,rows)=>{
//     if(err) return;
//     console.log(rows)
// })
// .then(user=>console.log(user))
// .catch(err=>console.log('Error:'+err))

// User.update({
//     username : 'hoa_nguyen'
// },{
//     username: 'hoa_nguyen_1232345' 
// })
// User.updateMany({ username : 'hoa_nguyen'},{
//     username: 'hoa_nguyen_1232345' 
// })
// updateOne

// User.findByIdAndRemove('5cb0850814ee8b08279cb2cd')
// .then(user=>console.log(user))
// .catch(err=>console.log('Error:'+err))

// User.findOneAndDelete({_id:'5cb0850814ee8b08279cb2cd'})
// .then(user=>console.log(user))
// .catch(err=>console.log('Error:'+err))
 
// User.deleteOne
/**
 * Create collection
 * Insert one/ insert many
 * Select
 * Update
 * Delete
 */

