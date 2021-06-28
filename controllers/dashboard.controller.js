'use strict';

var sessionstorage = require('sessionstorage');
const getDashboard=(req,res)=>{
    if(sessionstorage.getItem('user')!=null){

        res.sendFile('index.html',{root:'./views'})
    }
    else {
        res.send("<h1>This is not your place to come </h1>")
    }

}
module.exports=getDashboard