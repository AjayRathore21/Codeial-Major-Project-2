
const User = require('../models/users')

module.exports.profile = function(req,res){

    // if(!req.cookie){
    //  return res.redirect('/users/signin');
    
    return res.render('profile',{

        title:"profile page",
    });
    
    
    
    ///res.end("<h1>Users Profiles</h1>");

};

// post controller as assignment
module.exports.post = function(req,res){
    return res.end("<h1> post controller is build</h1>");
} 

// SignIn page render
module.exports.signin = function(req,res){
    return res.render('user_sign_in',{
        title:"Codeial || SignIn "
    });
};


//signup page render
module.exports.signup = function(req,res){
    return res.render('user_sign_up',{
        title:"codeial || SignUp"
    });
};



// SignUp  create user controller
module.exports.create = function(req,res){
    if(req.body.password!=req.body.confirm_password){   // yhaa mane req ki jgha pe res.body likh diyaa tha. dhyaan se likh bhai logical error ka ptaa nahi chalta jaldi se
        return res.redirect('back');
    }

    User.findOne({email:req.body.email},function(err,user){
        if(err){
            console.log('err in finding the user in signup');
            return res.redirect('back');
        }

        if(!user){
            User.create(req.body,function(err,user){
                if(err){
                    console.log('err in creating the user in signup');
                    return;
                }
                return res.redirect('/users/signin');

            });
        }
        else{
            return res.redirect('/users/signin');
        }
    });


   
};


module.exports.createsession = function(req,res){

    return res.redirect('/users/profile');
}


module.exports.destroysession = function(req,res){
    req.logout();

    return res.redirect('/home');
}