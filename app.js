require('dotenv').config()
const path = require('path');
const express = require('express')
const cors = require('cors');
const app = express()
app.use(cors());
const pool = require('./config/database')
const router = require('./router')
app.use(express.json());
app.use('/api', router);
app.use(express.static(path.join(__dirname, 'product-uploads')));

app.listen(process.env.PORT,() =>{
    console.log('-------->>>server is running')
    console.log('-------->>>server is running port number is',process.env.PORT)


})