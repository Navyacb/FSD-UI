const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/local',{ useNewUrlParser: true , useUnifiedTopology: true} )
.then(function(){
    console.log('Connected to Mongo');
})
.catch(reason => {
    console.log('Connection is not Unsuccessful..!',reason.message);
})

const courseSchema=new mongoose.Schema(
    {
        name: String,
        author: String,
        tags: [ String ],
        date: Date,
        isPublished: Boolean,
        price: Number
    });

    const Course=mongoose.model('Course',courseSchema);