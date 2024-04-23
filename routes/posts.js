const express = require('express');
const router = express.Router();

const postsCtrl = require('../controllers/posts');

//* ALL ROUTES START WITH '/posts'
// GET /posts/:postId (View details of a specific post)
router.get('/:postId', postsCtrl.show)
// GET /posts (Views all posts on home page)
router.get('/', postsCtrl.allPosts);
// POST /posts/new (Creates new post from home page form)
router.post('/', postsCtrl.create);
// DELETE /posts/:postId (Deletes specific post)
router.delete('/:postId', postsCtrl.delete)

module.exports = router;
