const post = require('../models/post');
const Post = require('../models/post');
const User = require('../models/user');

module.exports = {
    index,
    create,
}

async function create(req, res) {
    const post = new Post(req.body);
    // assign the logged in user's id
    post.author = req.user._id;
    console.log('this is a post: ',post);
    console.log('author: ', post.author);
    try {
        await post.save();
        res.redirect('posts');
    } catch(error) {
        console.log('Error creating a post: ', error);
    }

    // console.log('this is the content: ', content)
}

async function index(req, res) {
    const posts = await Post.find({});
    res.render('posts/index', { title: 'AFTER LOGGING IN', posts});
}