//* require mongoose library
const mongoose = require('mongoose');
//* Schema shortcut variable
const Schema = mongoose.Schema;

const userSchema = new Schema({ 
    name: String,
    googleId: {
        type: String,
        required: true
    },
    email: String,
    avatar: String
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);