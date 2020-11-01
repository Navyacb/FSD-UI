const {user} = require('../models/users');
let jwt = require('jsonwebtoken');
const jwtOptions = require('./jwt-options');


module.exports = function(user, res){

    console.log(user);
    if(!!user){


        var payload = {id: user._id, username: user.username, email: user.emailid};

        let token = jwt.sign(payload, jwtOptions.secretOrKey);

        res=token;
        return token;
     

    } else {
        
        res="";
    }

}
