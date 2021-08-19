const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/users');


passport.use(new LocalStrategy({
    usernameField:"email"
},
function(email,password,done){       //done is a call back fn which takes 2 arguments, first is error, second is 
 
    // find the user and establish the identity
    User.findOne({email:email},function(err,user){

        
        if(err){
             console.log('error in finding the user --> passport');
             return done(err)
        }
        if(!user || user.password!=password){
            console.log('invaild username/password')
            return done(null,false)
        }

        return done(null,user)


    });
}           
));

// serializing the user to decide which key is to be kept in the cookies

passport.serializeUser(function(user,done){
    done(null,user.id);
})

// deserializing the user from the key in the cookies

passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){

        if(err){
            console.log('error in finding the ---> passport');
            return done(err);
        }
        return done(null,user);
    });
});


// checks if user is authenticated

passport.checkAuthentication = function(req,res,next){

    if(req.isAuthenticated()){
        console.log("isAuthenticated() function is used!!!!!!")
        return next();
    }

    // if user is not authenticated
    return res.redirect('/users/signin');
}

passport.setAuthenticatedUser = function(req,res,next){
    if(req.isAuthenticated()){
        // req.user just current signin user from the cookie and we are just sending this to locals for the views
        res.locals.user = req.user;    }
        next();
}


module.exports = passport;