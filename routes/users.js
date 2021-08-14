const express = require('express');
const router = express.Router();
const users_controller  = require('../controllers/users_controller');

router.get('/profile',users_controller.profile);

// post controller assignment

router.get('/post',users_controller.post);

module.exports = router;