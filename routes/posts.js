const express = require('express');
const router = express.Router();

const postsCtrl = require('../controllers/posts');

/* GET users listing. */
router.get('/', postsCtrl.index);

module.exports = router;
