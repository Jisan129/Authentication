const express = require('express')
const routes = express.Router()
const bodyParser = require('body-parser')
const connection = require('../connection')
const useFunction = require('./userDatabase.routes')

routes.use(bodyParser.urlencoded({extended: false}));

const getLogin = require('../controllers/auth.controller')

routes.get('/', getLogin)
routes.post('/', (req, res) => {
    const email = req.body.email
    const password = req.body.password
    const queryString =  `INSERT INTO user 
            (
                email,password
            )
            VALUES
            (
                ?, ?
            )`

    connection.query(queryString,[email,password], (err, rows, fields) => {
        if (!err) {
            res.send(rows)
        } else {
            console.log(err)
        }
    })

    console.log(`Email ${email}  Password ${password}`)

})


module.exports = routes