const mysql=require('mysql2')
const express=require('express')
const app= express()

const userdata=require('./routes/userDatabase.routes')
const connection=require('./connection')
app.use('/data',userdata)


app.listen(4000)