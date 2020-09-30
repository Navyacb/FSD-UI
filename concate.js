const returnFirstName = require('./name');
const returnSecondName = require('./name');
let firstName = returnFirstName.fn('John');
let secondName = returnSecondName.sn('dan');
console.log(firstName+" "+secondName);