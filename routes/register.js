const express=require('express')
const routes=express.Router()
const getRegistration=require('../controllers/registration.controller')

routes.get('/',getRegistration)

module.exports=routes