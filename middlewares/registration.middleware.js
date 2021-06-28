const getRegistration = require('../controllers/registration.controller')
const connection = require('../connection')
const bcrypt = require('bcrypt');
const saltRound = 10;

const checkRegistration = (req, res, next) => {
    const password = req.body.password;
    const email = req.body.email;
    const confirm = req.body.confirm_password
    console.log(password,email,confirm)
    console.log(password.length)

   if (password.length < 6) {
       console.log('length')
       res.redirect('/register')
    } else if (password !== confirm) {
       console.log('Password same')

       res.redirect('/register')
    } else if (!email.includes("@gmail.com")) {
       console.log('mail problem')

       res.redirect('/register')
    } else {
        next()
    }
}
module.exports = checkRegistration


