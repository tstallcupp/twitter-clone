const express = require('express');
const router = express.Router();

const ensureLoggedIn = require('../config/ensureLoggedIn');
const commentsCtrl = require('../controllers/comments');


//* ALL ROUTES START WITH '/' (was starting with /posts)
// POST /posts/:postId/comments (Create a comment on a post)
router.post('/posts/:postId/comments', commentsCtrl.create);
// DELETE /comments/:id (Delete a comment)
router.delete('/comments/:id', commentsCtrl.delete);




module.exports = router;