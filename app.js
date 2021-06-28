const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
//static public

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth.routes');
const registerRoute = require('./routes/register');
const userdata=require('./routes/userDatabase.routes')

const dashboardRoute = require('./routes/dashboard.routes');

const app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'pug');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login',authRouter)

app.use('/register',registerRoute)

app.use('/dashboard',dashboardRoute);

app.listen(5005)
// catch 404 and forward to error handler


module.exports = app;


app.post('/login2',(req,res)=>{
    const email = req.body.email;
    console.log(email)
})