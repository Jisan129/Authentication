const getLogin=(req, res)=>{
    res.sendFile('login.html',{root:'./views'})

}

module.exports=getLogin