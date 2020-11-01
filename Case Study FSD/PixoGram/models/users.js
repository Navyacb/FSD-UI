const mongoose = require('mongoose');
const user = mongoose.model('user', new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },

    emailid: {
        type: String,
        required: true,
    },

    dateofbirth: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,

    },


    profilepic: {
        imgdata: Buffer,
        contentType: String,


    }


}));

exports.user = user;