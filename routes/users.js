const express = require('express');
const router = express.Router();
const users_controller  = require('../controllers/users_controller');

router.get('/profile',users_controller.profile);

// post controller assignment

router.get('/post',users_controller.post);


//SignIn page router

router.get('/signin',users_controller.signin);


//SignUp page router
router.get('/signup',users_controller.signup);

// sign up create user router

router.post('/create',users_controller.create);



module.exports = router;




