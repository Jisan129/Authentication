
const express=require('express')
const routes=express.Router()
const getLogin=require('../controllers/auth.controller')
/*const getLogin=(req,res)=>{
    res.sendFile('login.html',{root:'./views'})

}*/
routes.get('/',getLogin)

module.exports=routes