require('dotenv').config()
const express = require('express')
const app = express()
const pool = require('./config/database')
const router = require('./router')
app.use(express.json());
app.use('/api', router);

app.listen(process.env.PORT,() =>{
    console.log('-------->>>server is running')
    console.log('-------->>>server is running port number is',process.env.PORT)


})