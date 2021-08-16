const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/users');


passport.use(new LocalStrategy({
    usernameField:"email"
},
function(email,password,done){       //done is a call back fn which takes 2 arguments, first is error, second is 
 console.log('hello');
    // find the user and establish the identity
    User.findOne({email:email},function(err,user){

        console.log('user:',user);
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


// const passport = require('passport');
// console.log('passport is loaded now');
// const LocalStrategy = require('passport-local').Strategy;

// const User = require('../models/users');


// // authentication using passport
// passport.use(new LocalStrategy({
//         usernameField: 'email'
//     },
//     function(email, password, done){  // email and password are automatically passed
//         // find a user and establish the identity
//         console.log("inside the function");

//         User.findOne({email: email}, function(err, user)  {
//             console.log("Inside the User function", user);
//             if (err){
//                 console.log('Error in finding user --> Passport');
//                 return done(err);
//             }

//             console.log(`############## ${user}`);
//             if (!user || user.password != password){
//                 console.log('Invalid Username/Password');
//                 return done(null, false);  // returned to failureRedirect in users.js
//             }

//             return done(null, user);  // user is returned to passport.serializeUser()
//         });
//     }


// ));


// // serializing the user to decide which key is to be kept in the cookies
// passport.serializeUser(function(user, done){
//     console.log(`************** ${user}`);
//     console.log(user.id, 'and   ', user._id);  // both are same
//     done(null, user.id);   // user.id is sent to session in index.js to encript cookie
// });



// // deserializing the user from the key in the cookies
// passport.deserializeUser(function(id, done){
//     User.findById(id, function(err, user){
//         if(err){
//             console.log('Error in finding user --> Passport');
//             return done(err);
//         }

//         return done(null, user);
//     });
// });
