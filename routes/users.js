const express = require('express');
const router = express.Router();

const usersCtrl = require('../controllers/users');

//* ALL ROUTES STARTS WITH '/users'
// GET /:userId/posts/post:id (view a specific post from a specific user)
//* router.get('/:userId/posts/:postId', usersCtrl.show);
// GET /:userId (viewing users profile & all posts)
router.get('/:userId', usersCtrl.index)

module.exports = router;