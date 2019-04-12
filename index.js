const mongoose = require('mongoose')


mongoose.connect('mongodb://127.0.0.1/mongoose1503',{
    'useNewUrlParser': true
});
mongoose.connection
.then(()=>{
    console.log('DB Connected!')
})
.catch(err=>console.log(err.message))

