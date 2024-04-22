// const post = require('../models/post');
const Post = require('../models/post');
const User = require('../models/user');

module.exports = {
    index,
    create,
}

async function create(req, res) {
    const { content } = req.body
    // assign the logged in user's id
    try {
        await Post.create({
            content,
            author: req.user._id,
            userName: req.user.name,
            userAvatar: req.user.avatar
        });
        res.redirect('posts');
    } catch(error) {
        console.log('Error creating a post: ', error);
    }

    // console.log('this is the content: ', content)
}

async function index(req, res) {
    try {
        const posts = await Post.find({}).sort({ createdAt: -1 });
        res.render('posts/index', { title: 'AFTER LOGGING IN', posts});
    } catch (error) {
        console.log('Error fetching posts: ', error);
    }
}