const pool = require('./config/database')
const express = require('express')
const app = express()
const {getstudentinfo}  = require('./controller/student')
const {signupuser,signinuser} = require('./controller/signup')
const {addProduct, getproduct} = require('./controller/products')
app.get('/studentinfo', getstudentinfo);

//seller API'S
app.post('/signupuser', signupuser)
app.post('/signinuser', signinuser)

//Product API's
app.post('/add-product',addProduct)
app.get('/getAllproducts',getproduct)

module.exports = app;