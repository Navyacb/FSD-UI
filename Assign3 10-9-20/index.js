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
    const Person=mongoose.model('Person',personSchema);
    let person=new Person({
        name: 'Donna',
        age: 16,
        status: true,
        // group:['politics','news']
    });
    async function createPerson()
        {
            let result = await person.save();
        
            console.log(result);
        }
        
        createPerson().then(function (){
            console.log('person created: ');
        
        }).catch(error => {
            console.log('Error creating person:',error.message);
        });

//         async function getPerson()
// {
//     let result = await Person.find();
//     console.log('displaying person',result);
//     console.log('called getPerson()');
//     async function run()
// {
//     getPerson().then(function(){
//         console.log('called run function');
//     }).catch(error => {
//         console.log(error.message);
//     })
// }
// run().then(function () {
//     console.log('finished running');

// }).catch(error => {
//     console.log(error.message);

// });
// async function findPersonByID(id)
// {
//     await Person.findById(id).then(function (result) {
//         console.log('Person found:',result);
    
//     }).catch(error => {
//         console.log('Error finding person with ID: ',id);
//     });
// }
// findPersonByID('5f7eafc633b1e92948949061').then(()=>{
//         console.log('finished finding person')
    
//     }).catch(reason => {
//         console.log('Error with finding person')
//     });
    async function findPersonbyName(name) {
            await Student.find({Name: name}).then(function (result) {
                console.log('Display person details with name'+ result);
            })
                .catch(error => {
                    console.log('person not found');
                })
        }
        findStudentbyName('John').then(()=>{
            console.log('finished finding person')
        
        }).catch(reason => {
            console.log('Error with finding person')
        });
        async function updatePerson(id)
        {
            const person = await Person.findPersonById(id);
            console.log(person);
            if (!person) return;
            person.name='Rose', person.age=15;
            person.save();
            console.log(person);
        }
        updatePerson('5f7ff1028abe7c16e32b8b90').then(()=>{
            console.log('person update success');
        });

        async function removeperson()
        {
        
            const result = await Person.delete({author:'John'});
            console.log(result);
        }
        removeperson().then(() =>{
            console.log('success');
        } );

