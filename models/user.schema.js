const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/NodeConnect').then(e=>{
    console.log("Connect to mongodb");
}).catch(e=>{
   console.log("Error to get connect");
});

const userSchema=mongoose.model('users',{});

module.exports=userSchema;