const express = require('express');
const app = express();
const port = 2000;
const db = require('./config/mongoose');
const expresslayouts = require('express-ejs-layouts');
app.use(expresslayouts);

// extrecting style and script from the different pages and putting into layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);   // i had done spelling mistake in extractstyles. keep it on the mind

app.use(express.static('./assets'));  

// use of express router
app.use('/',require('./routes'));

// setting up our ejs view engine

app.set('view engine','ejs');
app.set('views','./views');



app.listen(port,function(err){

    if(err){
        console.log(`Error occures in running the server:${err}`);
        return;
    }
    console.log(`wow...my server is runing in port number:${port}`);
})