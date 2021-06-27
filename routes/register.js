const express=require('express')
const routes=express.Router()
const bodyParser=require('body-parser')
routes.use(bodyParser.urlencoded({ extended: false }));

const getRegistration=require('../controllers/registration.controller')

routes.get('/',getRegistration)
routes.post('/',(req, res)=>{
    const email=req.body.email

})

module.exports=routes