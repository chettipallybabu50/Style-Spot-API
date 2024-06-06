const pool = require('./config/database')
const express = require('express')
const app = express()
const {getstudentinfo}  = require('./controller/student')
app.get('/studentinfo', getstudentinfo);

module.exports = app;