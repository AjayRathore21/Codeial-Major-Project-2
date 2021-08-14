const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/codeial_development');

const db = mongoose.connection;

db.on('error',console.error.bind(console,'error in connecting to the mongoDB'));
db.once('open',function(){
    console.log('yeahhh...connected to the DB');
});

module.exports = db;