// const post = require('../models/post');
const Post = require('../models/post');
const User = require('../models/user');

module.exports = {
    allPosts,
    show,
    create,
    delete: deletePost,
    edit,
    update,
}

async function update(req, res) {
    try {
        const editedPost = await Post.findByIdAndUpdate(
        { _id: req.params.postId, 
            author: req.user._id  
        },
        // Update object with updated properties
        req.body, 
        // options object { new: true } returns updated doc
        { new: true }
    );
    // Redirect to edited post
    return res.redirect(`/posts/${ editedPost._id }`);
    } catch (error) {
        console.log(error.message);
        return res.redirect('/posts');
    }
};

async function edit(req, res) {
    try {
        // find the specific post by id
        const post = await Post.findById(req.params.postId);
        if (!post) {
            return res.status(404).send('Post Not Found');
        }
        res.render('posts/edit', { title: 'Edit Post', post })
    } catch (error) {
        console.log('Error rendering edit form: ', error);
        res.status(500).send('Internal Server Error');
    }
};

async function deletePost(req, res) {
    try{
        const deletedPost = await Post.findOneAndDelete({
            _id: req.params.postId,
            author: req.user._id
        })
        console.log('post: ', deletedPost)
        if (!deletedPost) {
            return res.status(400).send('Post Not Found');
        }
        res.redirect('/posts');
    } catch (error) {
        console.log('Error deleting post: ', error)
        res.status(500).send('Internal Server Error');
    }
};

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
        res.redirect('/posts');
    } catch(error) {
        console.log('Error creating a post: ', error);
        res.status(500).send('Internal Server Error');
    }
}

async function show(req, res) {
    try {
        // find specific post
        const post = await Post.findById(req.params.postId);
        // console.log(req.params.id)
        if (!post) {
            return res.status(404).send('Post not found');
        }
        console.log(req.body)
        res.render('posts/show', { title: 'Post Detail', post })
    } catch (error) {
        console.log('Error fetching post', error)
        res.status(500).send('Internal Server Error');
    }
};

async function allPosts(req, res) {
    try {
        const posts = await Post.find({}).sort({ createdAt: -1 });
        res.render('posts/index', { title: 'AFTER LOGGING IN', posts});
    } catch (error) {
        console.log('Error fetching posts: ', error);
    }
}