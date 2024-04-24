const Post = require('../models/post');
const User = require('../models/user');

module.exports = {
    create,
    delete: deleteComment,
};

async function deleteComment(req, res) {
    const post = await Post.
};

async function create(req, res) {
    console.log('req.user: ', req.user)
    console.log('req.body: ', req.body)
     // Ensure that req.user has the expected properties
     if (!req.user || !req.user._id) {
        console.log('Error: req.user._id is missing or undefined.');
        return res.status(400).send('Bad Request');
    }
    const post = await Post.findById(req.params.postId);
    // Update req.body to add user info
    req.body.author = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    // Add the comment
    post.comments.push(req.body);
    console.log('post: ', post);
    try {
        await post.save();
    } catch (error) {
        console.log('Error Creating a comment: ', error);
        res.status(500).send('Internal Server Error');
    }
    res.redirect(`/posts/${post._id}`);
};