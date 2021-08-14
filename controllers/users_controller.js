


module.exports.profile = function(req,res){
    return res.render('profile',{

        title:"profile page",
    });
    
    
    
    ///res.end("<h1>Users Profiles</h1>");

};

// post controller as assignment
module.exports.post = function(req,res){
    return res.end("<h1> post controller is build</h1>");
} 

// SignIn controller
module.exports.createsession = function(req,res){
    return res.render('user_sign_in',{
        title:"Codeial || SignIn "
    });
};

// SignUp controller
module.exports.create = function(req,res){
    return res.render('user_sign_up',{
        title:"Codeial || SignUp"
    });
};