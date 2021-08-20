const express = require('express');
const router = express.Router();
const users_controller  = require('../controllers/users_controller');
const passport = require('passport');

router.get('/profile',passport.checkAuthentication,users_controller.profile); // always pass fn into the middleware not call

// post controller assignment

router.get('/post',users_controller.post);


//SignIn page router

router.get('/signin',users_controller.signin);


//SignUp page router
router.get('/signup',users_controller.signup);

// sign up create user router

router.post('/create',users_controller.create);

//use passport as middleware to authenticate
router.post('/createsession',passport.authenticate(
    'local',
    {
        failureRedirect:'/users/signin'
    }
),users_controller.createsession);

router.get('/signout',users_controller.destroysession);


module.exports = router;




