// const readline = require('readline');
const mongoose = require('mongoose');
// let rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
mongoose.connect('mongodb://localhost:27017/local',{ useNewUrlParser: true , useUnifiedTopology: true} )
.then(function(){
    console.log('Connected to Mongo');
})
.catch(reason => {
    console.log('Connection is not Unsuccessful..!',reason.message);
})
const personSchema=new mongoose.Schema(
    {
        name: String,
        age: Number,
        status: Boolean,
        group:[ String ]
    });
    const person=mongoose.model('Person',personSchema);