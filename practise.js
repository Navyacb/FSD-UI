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


    
// const fs = require('fs');
// fs.readdir('...../', (err,data)=> {
//     if (err)
//         console.log('error occurred');
//     else
//         console.log(data);
// });

// const path = require('path');
// let x=path.parse(__filename);
// console.log(x);
// let y=path.dirname('Full stack\Assignment\UI');
// console.log(y);

// function Test(message)
// {
//     console.log(message);
//     setTimeout(Test1,200);
//     console.log('hello');
// }
// function Test1()
// {
//     console.log('Hi');
// }
// Test('Hi I Am John');

const os = require('os');
let release=os.release();
let platform=os.platform();
let arc=os.arch();
let hostName=os.hostname();
let freeMem=os.freemem();
let homeDir=os.homedir()
let networkInterfaces=os.networkInterfaces();
console.log(`${release} ${platform} ${arc} ${os.hostname()}`);
console.log(`${os.freemem()}`);
console.log(`${os.homedir()}`);