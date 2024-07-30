const pool = require('../config/database')

const addProduct = async (req,res) =>{
    console.log('------>>>product req',req.body)
    try{
        const {product_name,product_price,product_category,product_color,product_description,user_id} = req.body
        console.log('------>>>product_name, product_price, product_category, product_color, product_description',product_name, product_price,product_category,product_color,product_description)

        const result = await pool.query(
            'INSERT INTO products (product_name,product_price,product_category,product_color,product_description,user_id, added_date) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING product_id ',
            [product_name, product_price, product_category, product_color, product_description,user_id, new Date()]

        )
        console.log("------>>add product result ",result.rows)
        console.log("------>>add product result rowCount ",result.rowCount)
        if(result.rowCount){
            return res.status(200).send({
                message:'Product added successfully!',
                status : true,
                data : result.rows
            })
        }
    }
    catch(err){
        console.log('---->>> product err',err)
        return res.status(500).send({
            message: 'Internal server error',
            status: false
        });

    }
}

const getproduct =async(req,res)=>{
    console.log('the get product request')
    try{
        const result = await pool.query(
            'select *from products'
        )
        console.log('--->>get all product',result.rows)
        console.log('--->>get all product',result.rowCount)
        if(result.rowCount>0){
            return res.status(200).send({
                message:'Success fully products data fetched',
                status: true,
                data: result.rows
            })
        }else{
            return res.status(400).send({
                message:'No data found',
                status:false
            })
        }

    }
    catch(err){
        console.log('---->>>get product catch error')
        return res.status(500).send({
            message: 'Internal server error',
            status: false

        })

    }
}

module.exports ={
    addProduct,
    getproduct

}