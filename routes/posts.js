const express = require('express');
const router = express.Router();

const ensureLoggedIn = require('../config/ensureLoggedIn');
const postsCtrl = require('../controllers/posts');

//* ALL ROUTES START WITH '/posts'
// GET /posts/:postId/edit (View edit form page)
router.get('/:postId/edit', postsCtrl.edit);
// GET /posts/:postId (View details of a specific post)
router.get('/:postId', postsCtrl.show);
// GET /posts (Views all posts on home page)
router.get('/', ensureLoggedIn, postsCtrl.allPosts);
// POST /posts/new (Creates new post from home page form)
router.post('/', ensureLoggedIn, postsCtrl.create);
// POST /posts/:postId/edit (Handle edit/update)
router.post('/:postId/edit', ensureLoggedIn,  postsCtrl.update)
// DELETE /posts/:postId (Deletes specific post)
router.delete('/:postId', ensureLoggedIn, postsCtrl.delete)

module.exports = router;
