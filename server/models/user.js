const mongoose = require('mongoose');
const  validator = require('validator');

// {
//     email: 'stan@example.com',
//     password: 'fojsdhfovneornv',
//     tokens: [{
//         access: 'auth',
//         token: 'rboisdfboidfnb[oidfoidsfisd'
//     }]
// }

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 8,
        trim: true,
        unique: true,
        validate: {
            // validator: (value) => {
            //     return validator.isEmail(value); 
            // },
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email'
        }
    },
    password: {
        type: String,
        require: true,
        minlength: 6
    },
    tokens: [{
        access: {
            type: String,
            required: true
        }, 
        token: {
            type: String,
            required: true
        }
    }]
});

module.exports = {User};