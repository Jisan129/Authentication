const express = require('express')
const routes = express.Router()
const bodyParser = require('body-parser')
routes.use(bodyParser.urlencoded({extended: false}));
const {getRegistration ,sendData}= require('../controllers/registration.controller')
const connection = require('../connection')
const checkRegistration = require('../middlewares/registration.middleware')

const bcrypt = require('bcrypt');
const saltRound = 10;

routes.get('/', getRegistration)
routes.post('/',checkRegistration,sendData)

/*routes.post('/', (req, res) => {


})*/

module.exports = routes