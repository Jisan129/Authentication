const express = require('express')
const routes = express.Router()
const bodyParser = require('body-parser')
const connection = require('../connection')
const useFunction = require('./userDatabase.routes')
const bcrypt = require('bcrypt');


routes.use(bodyParser.urlencoded({extended: false}));

const getLogin = require('../controllers/auth.controller')

routes.get('/', getLogin)
routes.post('/', (req, res) => {
    const email = req.body.email
    const password = req.body.password.toString()
    const queryString = `select password from user where email=?;`
    var newpassword = ''
    var temp = ''

    connection.query(queryString, email, (err, result) => {
        if (!err) {
            newpassword = result[0].password

            bcrypt.compare(password,newpassword).then(res=>{
                console.log(res)
            }).catch(err=>console.error(err.message))


        } else {
            console.log(err)
        }
    })

})


module.exports = routes