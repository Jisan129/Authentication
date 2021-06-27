const getRegistration=(req,res)=>{
    res.sendFile('form.html',{root:'./views'})
}
module.exports=getRegistration