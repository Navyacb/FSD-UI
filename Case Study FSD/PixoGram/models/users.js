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

    password: {
        type: String,
        required: true,

    },


    profilepicture: {
        imgdata: Buffer,
        contentType: String,


    }


}));

function validateuser(user) {
    const schema = {
        name: Joi.string().min(5).max(50).required(),
        phone: Joi.string().min(5).max(50).required(),
        isGold: Joi.boolean()
    };
    return Joi.validate(user, schema);
}
exports.user = user;
exports.validate = validateuser;