const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/local',{ useNewUrlParser: true , useUnifiedTopology: true} )
.then(function(){
    console.log('Connected to Mongo');
})
.catch(reason => {
    console.log('Connection is not Unsuccessful..!',reason.message);
})

const studentSchema=new mongoose.Schema(
    {
        firstName:String,
        lastName:String,
        email:String,
        doj:{type: Date,default:Date.now()}
    });

const Student=mongoose.model('Student',studentSchema);
// let student=new Student({
//     firstName: 'John',
//     lastName: 'Lu',
//     email: 'jlu@email.com'
// });
// async function createStudent()
// {
//     let result = await student.save();

//     console.log(result);
// }

// createStudent().then(function (){
//     console.log('Student created: ');

// }).catch(error => {
//     console.log('Error creating student:',error.message);
// });

async function getStudents()
{
    let result = await Student.find();
    console.log('displaying students',result);
    console.log('called getStudents()');
}

// // async function run()
// // {
// //     getStudents().then(function(){
// //         console.log('called run function');
// //     }).catch(error => {
// //         console.log(error.message);
// //     })
// // }
// // run().then(function () {
// //     console.log('finished running');

// // }).catch(error => {
// //     console.log(error.message);

// // });
// async function findStudentByID(id)
// {
//     await Student.findById(id).then(function (result) {
//         console.log('Student found:',result);
    
//     }).catch(error => {
//         console.log('Error finding student with ID: ',id);
//     });
// }

// findStudentByID('5f7eafc633b1e92948949061').then(()=>{
//     console.log('finished finding student')

// }).catch(reason => {
//     console.log('Error with finding student')
// });

// async function findStudentbyName(name) {
//     await Student.find({firstName: name}).then(function (result) {
//         console.log('Display Student details with name'+ result);
//     })
//         .catch(error => {
//             console.log('Student not found');
//         })
// }
// findStudentbyName('John').then(()=>{
//     console.log('finished finding student')

// }).catch(reason => {
//     console.log('Error with finding student')
// });

async function findByFirstName(firstName) {
    /* let result = await Student.find({firstName: firstName})
         .select('firstName lastName')
         console.log('Student found:', result);*/
 
     let result = await Student.find()
         .select('firstName lastName')
    // .sort('firstName');
         .sort({firstName:1});
     console.log('Student found:', result);
 
 }
 
 findByFirstName('John').then(function () {
 
 }).catch(reason => {
 
 });