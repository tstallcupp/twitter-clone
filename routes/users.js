const express = require('express');
const router = express.Router();

const usersCtrl = require('../controllers/users');

//* ALL ROUTES STARTS WITH '/users'
//GET /:id (viewing users profile & all posts)
router.get('/:userId', usersCtrl.index)

module.exports = router;