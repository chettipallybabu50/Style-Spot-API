const pool = require('./config/database')
const express = require('express')
const app = express()
const {getstudentinfo}  = require('./controller/student')
const {signupuser,signinuser} = require('./controller/signup')
app.get('/studentinfo', getstudentinfo);

app.post('/signupuser', signupuser)
app.post('/signinuser', signinuser)

module.exports = app;