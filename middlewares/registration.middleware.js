const getRegistration = require('../controllers/registration.controller')
const connection = require('../connection')
const bcrypt = require('bcrypt');
const saltRound = 10;

const checkRegistration = (req, res, next) => {
    const password = req.body.password;
    const email = req.body.email;
    const name = req.body.name;
    const confirm = req.body.confirm_password

    if (password.length < 6) {
        res.redirect('/register')
    } else if (password !== confirm) {
        res.redirect('/register')
    } else if (!email.includes("@gmail.com")) {
        res.redirect('/register')
    } else {
        next()
    }
}
module.exports = checkRegistration


