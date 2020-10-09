const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/local', {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log('connected successfully');
});


const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [ String ],
    date: Date,
    isPublished: Boolean,
    price: Number
});

const Course = mongoose.model('Course', courseSchema);

// async function getCourses() {
//     return Course
//          .find({isPublished: true})
//          .and([{name: {$regex: /by/}}])
//         .and({price: { $gte: 12 }})

//         // .and([{tags: 'backend'}])
//         .sort('-price')
//         .select('name author price tags isPublished');
// }

// async function run() {
//     const courses = await getCourses();
//     console.log(courses);
// }

// run();
const course=new Course({
    name:'Spring',
    author: 'Jane',
    tags: ['Spring','Middleware'],
    isPublished:true,
    price:34
});

async function createCourse()
{
    const result = await course.save();
    console.log('Course created');
}/*
async function updateCourse(id)
{
    const course = await Course.findById(id);
    console.log(course);
    if (!course) return;
    course.name='Spring', course.author='Jane';
   // course.set({ name: 'Learning React',author: 'Mosh',_v: 2});
    course.save();
    console.log(course);
}
updateCourse('5f7ff1028abe7c16e32b8b90').then(()=>{
    console.log('course update success');
});*/
//update first : use course.update
//update many : use course.updateMany
async function updateCourse()
{
    const result = await Course.updateMany({ author: 'Mosh' }, {
        $set: { name: 'Learning Karate'}


});
    console.log('course update success');
}

updateCourse().then(() =>{
    console.log('success');
} );
