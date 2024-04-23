const express = require('express');
const router = express.Router();

const postsCtrl = require('../controllers/posts');

//* ALL ROUTES START WITH '/posts'
// GET /posts/:postId (view details of a specific post)
router.get('/:postId', postsCtrl.show)
// GET /posts (gets all posts on home page)
router.get('/', postsCtrl.allPosts);
// GET /posts/new (creates new post & redirects to home page with posts)
router.post('/', postsCtrl.create);

module.exports = router;
