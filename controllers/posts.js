const Post = require('../models/post');

module.exports = {
    index,
}

async function index(req, res) {
    const posts = await Post.find({});
    res.render('posts/index', { title: 'AFTER LOGGING IN', posts});
}