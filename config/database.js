const { Pool  } = require('pg');
const express = require('express')

const pool = new Pool({
	user:'postgres',
	password:'sU06BA08@50',
	host:'localhost',
	port:'5432',
	database:'postgres'

})
pool.connect().then(()=>{
	console.log('---------->>> the database is connected ')
}).catch((err)=>{
	console.log('---------->>>>err',err)
}
)
module.exports = pool 
