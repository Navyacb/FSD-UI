function returnFirstName(fn)
{
    try
    {
        if (!isNaN(fn))
        throw err;
         return fn;
    }
    catch(err) 
    {
        return 'Please enter the valid first name';
    }
}

function returnSecondName(sn)
{
    try
    {
        if (!isNaN(sn))
        throw err;
         return sn;
    }
    catch(err) 
    {
        return 'Please enter the valid second name';
    }
}

module.exports.fn=returnFirstName;
module.exports.sn=returnSecondName;
