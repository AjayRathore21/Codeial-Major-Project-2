const express = require('express');
const app = express();
const port = 2000;

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