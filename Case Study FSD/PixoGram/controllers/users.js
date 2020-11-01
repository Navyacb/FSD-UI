const {user} = require('../models/users');

exports.getUser = (id,cb) => {
    let user = user.findById({_id:id});
    cb(false,customer);

    };


exports.getUsers = async (id,cb) => {

    let user=[];
    for (let i=0;i<id.length;i++) {
        console.log(id[i]);
        let cust = await userr.findById({_id:id[i]});
        console.log(cust);
        customer.push(cust);
    }
    cb(false,user);
};