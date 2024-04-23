const Post = require('../models/post');
const User = require('../models/user');

module.exports ={
    index,
    // show,
}

// async function show(req, res) {

// }



async function index(req, res) {
    try {
        // get user data based on the userId from params
        const userId = req.params.userId;
        const user = await User.findById(userId);
        if(!user) {
            return res.status(404).send('USER NOT FOUND');
        }
        const userPosts = await Post.find({ author: userId });
        res.render('users/index', { title: 'USER PROFILE', user, posts: userPosts });
    } catch (error) {
        console.log('Error fetching user profile: ', error);
    }
}