const express = require('express');
const app = express();
const port = 2000;

// use of express router
app.use('/',require('./routes'));



app.listen(port,function(err){

    if(err){
        console.log(`Error occures in running the server:${err}`);
        return;
    }
    console.log(`wow...my server is runing in port number:${port}`);
})