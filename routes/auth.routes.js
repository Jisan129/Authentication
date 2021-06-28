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
    const email = req.body.email.toString()
    const password = req.body.password.toString()
    const queryString = `select password from user where email=?;`
    var newpassword = ''
    var temp = ''


    connection.query(queryString, email, (err, result) => {
        if (!err) {
            newpassword = result[0].password
            console.log(newpassword)
            console.log(password)
            bcrypt.compare(password, newpassword, function (err,isValid) {
                if (isValid) {
                    res.redirect('/dashboard')
                } else {
                    res.send("Error")
                }

            })
        }
    })

})


module.exports = routes