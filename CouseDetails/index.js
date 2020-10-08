const readline = require('readline');
const mongoose = require('mongoose');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
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

    // const Course=mongoose.model('Course',courseSchema);
    // let course=new Course({
    //     name: 'Full stack',
    //     author: 'Vikram',
    //     tags:['ANgular','Frontend'],
    //     date:Date.now(),
    //     isPublished: true,
    //     price: 1000
    // });
    // async function createcourse()
    // {
    //     let result = await course.save();
    
    //     console.log(result);
    // }
    
    // createcourse().then(function (){
    //     console.log('course created: ');
    
    // }).catch(error => {
    //     console.log('Error creating course:',error.message);
    // });
    const Course = mongoose.model('Course', courseSchema);
course = new Course();
let answers = [];
let tempTags = [];
let name = '';
let author = '';
let published = false;
let price='';

async function readData() {
    rl.question('name? author? tags? published?price? ', answer => {
        answers = answer.split(',');
        console.log(answers);
        name = answers[0];
        author = answers[1];
        tempTags= answers[2].split(' ');
        published=answers[3]
        price=answers[4];
        course.set({name: name});
        course.set({author: author});
        course.set( {tags: tempTags});
        course.set( {isPublished: published});
        course.set({price: parseInt(price)});
        course.save();
        rl.close();
    });

}


readData().then(function (){
    console.log('successfully done');
}).catch(reason => {
    console.log('failed',reason.message);
});


