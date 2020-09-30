

function add(firstNumber,secondNumber)
{
    let result=firstNumber+secondNumber;
    console.log("Result of addition is: "+result);
}

function subtraction(firstNumber,secondNumber)
{
    let result=firstNumber-secondNumber;
    console.log("Result of subtraction is: "+result);
}


function division(firstNumber,secondNumber)
{
    let result=firstNumber/secondNumber;
    console.log("Result of division is: "+result);
}

function multiple(firstNumber,secondNumber)
{
    let result=firstNumber*secondNumber;
    console.log("Result of multiplication is: "+result);
}
module.exports.addMethod=add;
module.exports.subMethod=subtraction;
module.exports.divMethod=division;
module.exports.multiMethod=multiple;

