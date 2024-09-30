const pool = require('./config/database')
const express = require('express')
const multer = require('multer');
const app = express()
const {getstudentinfo}  = require('./controller/student')
const {signupuser,signinuser} = require('./controller/signup')
const {addProduct, getproduct, upload, Deleteproduct, UpdateProduct, getProductbyId, getsearchProduct} = require('./controller/products')
app.get('/studentinfo', getstudentinfo);

//seller API'S
app.post('/signupuser', signupuser)
app.post('/signinuser', signinuser)

//Product API's
app.post('/add-product', upload.single('product_file_path'),addProduct)
app.get('/getAllproducts',getproduct)
app.delete('/delete-product',Deleteproduct)
app.patch('/Update-Product', upload.single('product_file_path'),UpdateProduct)
app.get('/get-product-By-id',getProductbyId)
app.get('/search-product', getsearchProduct)

module.exports = app;