const express = require('express');
const router = express.Router();

const postsCtrl = require('../controllers/posts');


// GET /posts (gets all posts on home page)
router.get('/', postsCtrl.index);
// GET /posts/new (creates new post & redirects to home page with posts)
router.post('/', postsCtrl.create);

module.exports = router;
