// const fs = require('fs');
// let file_details=fs.readdirSync('./');
// console.log(file_details);

// const fs = require('fs');
// let file_detailsSync=fs.readdirSync('./');
// console.log(file_detailsSync);
// let file_detailsAsync=fs.readdir('./',function (){
//     console.log('within call back');
// });
// console.log(file_detailsAsync);


    
const fs = require('fs');
fs.readdir('...../', (err,data)=> {
    if (err)
        console.log('error occurred');
    else
        console.log(data);
});

