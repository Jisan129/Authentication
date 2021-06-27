
const express=require('express')
const routes=express.Router()
const bodyParser=require('body-parser')
routes.use(bodyParser.urlencoded({ extended: false }));

const getLogin=require('../controllers/auth.controller')

/*const getLogin=(req,res)=>{
    res.sendFile('login.html',{root:'./views'})

}*/
routes.get('/',getLogin)
routes.post('/',(req,res)=>{
    const email=req.body.email
    const password=req.body.password
    console.log(`Email ${email}  Password ${password}`)
})

module.exports=routes