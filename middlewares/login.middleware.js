const {insertData} = require('../routes/userDatabase.routes')

const checkUser=(req, res,next) =>{
    insertData()
    next()
}