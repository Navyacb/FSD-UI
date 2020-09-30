
const returnFirstName = require('./name');
const returnSecondName = require('./name');
let firstName = returnFirstName.fn('John');
let secondName = returnSecondName.sn('Harry');

        console.log("Concatination of first and second name is: "+firstName+" "+secondName);
    