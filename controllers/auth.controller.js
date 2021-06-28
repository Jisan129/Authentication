const connection = require('../connection')
const bcrypt = require('bcrypt');
const saltRound = 10;
const getLogin=(req, res)=>{
    res.sendFile('login.html',{root:'./views'})

}

module.exports=getLogin