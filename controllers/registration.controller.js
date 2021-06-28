const connection = require('../connection')
const bcrypt = require('bcrypt');
const saltRound = 10;
const getRegistration=(req,res)=>{
    res.sendFile('register.html',{root:'./views'})
}
const sendData = (req,res)=>{
    const email = req.body.email
    const password = req.body.password

    var newpassword = ''
    bcrypt.genSalt(10).then(salt => {
        console.log(`Salt ${salt}`);
        return bcrypt.hash(password, salt)
    }).then(hash => {
        newpassword = hash
        const queryString = `INSERT INTO user
            (
                email,password
            )
            VALUES
            (
                ?, ?
            )`

        connection.query(queryString, [email, newpassword], (err, rows, fields) => {
            if (!err) {
                        res.redirect('/login')
                } else {
                console.log(err)
            }
        })
    })
        .catch(err => console.error(err.message))

}
module.exports={getRegistration,sendData}