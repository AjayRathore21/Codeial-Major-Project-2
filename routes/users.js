const express = require('express');
const router = express.Router();
const users_controller  = require('../controllers/users_controller');

router.get('/profile',users_controller.profile);

// post controller assignment

router.get('/post',users_controller.post);


//SignIn router

router.get('/signin',users_controller.createsession);


//SignUp router
router.get('/signup',users_controller.create);



module.exports = router;




