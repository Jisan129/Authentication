const express=require('express')
const routes=express.Router()
const getDashboard=require('../controllers/dashboard.controller')


routes.get('/',getDashboard)
module.exports=routes