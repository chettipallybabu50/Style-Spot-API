const { Pool  } = require('pg');
const express = require('express')

console.log('----------------->>>.env',process.env.DB_HOST)

// const pool = new Pool ({
//     user:process.env.DB_USER,
// 	password:process.env.DB_PASSWORD,
// 	host:process.env.DB_HOST,
// 	port:process.env.DB_PORT,
// 	database:process.env.DB_DATABASE,

// })
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
