//* require mongoose library
const mongoose = require('mongoose');
//* Schema shortcut variable
const Schema = mongoose.Schema;

const postSchema = new Schema({
    content: {
        type: String,
        minLength: 1,
        maxLength: 280,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userName: String,
    userAvatar: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Post', postSchema);