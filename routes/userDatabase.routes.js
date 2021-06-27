const express =require('express')
const router=express()
const connection=require('../connection')


router.get("/",(req,res)=>{
  connection.query("insert into user (email,password) values (\"abcd@email.com\",\"1234\");",(err,rows,fields)=>{
       if(!err){
            res.send(rows)
       }
       else {
            console.log(err)
       }
  })
})
module.exports=router