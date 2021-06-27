const mysql=require('mysql2')
const express=require('express')
const app= express()

const mysqlConnection=mysql.createConnection({
    host: 'localhost',
    user: "jisan",
    password:"1234",
    database:"assignment",
    multipleStatements: true
})

mysqlConnection.connect((err)=>{
    if(!err){
        console.log("Connected")
    }
    else {
        console.log(err)
    }
})
app.listen(4000)