const express = require('express');
const app = express();
const port = 2000;
const cookieParser = require('cookie-parser');     // cookie parser is require
const db = require('./config/mongoose');
const expresslayouts = require('express-ejs-layouts');

// used for session cookies

const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');


app.use(expresslayouts);



app.use(express.urlencoded());
app.use(cookieParser());

// extrecting style and script from the different pages and putting into layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);   // i had done spelling mistake in extractstyles. keep it in the mind

app.use(express.static('./assets'));  





// use of express router 
//app.use('/',require('./routes'));

// setting up our ejs view engine

app.set('view engine','ejs');
app.set('views','./views');

// session middleware
app.use(session({
    name:'Codeial',  // change the secret before deployment
    secret:'blahsomething',
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(60*1000*100),   // time in milliseconds
    }



}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
// use of express router 
app.use('/',require('./routes'));


app.listen(port,function(err){

    if(err){
        console.log(`Error occures in running the server:${err}`);
        return;
    }
    console.log(`wow...my server is runing in port number:${port}`);
})