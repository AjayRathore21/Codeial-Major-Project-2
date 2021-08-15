module.exports.home = function(req,res){
    console.log(req.cookies);      // taking cookie from the brower  
    res.cookie('user_id',25);    //updating the cookie
    return res.render('home',{
        title:"home",
    })

}