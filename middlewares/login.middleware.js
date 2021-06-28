
const checkUser=(req, res,next) =>{
    const email = req.body.email
    const password = req.body.password
    next()
}