const getDashboard=(req,res)=>{
    res.sendFile('dashboard.html',{root:'./views'})

}
module.exports=getDashboard