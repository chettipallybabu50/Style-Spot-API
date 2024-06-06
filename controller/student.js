const { ReasonPhrases, StatusCodes, getReasonPhrase, getStatusCode } = require('http-status-codes');
const pool = require('../config/database')


const getstudentinfo = async (req,res)=>{
    try{
        const result = await pool.query('SELECT * FROM studentinfo')
        console.log('---------->>>>result', result)
        res.status(StatusCodes.OK).send({
            data: result.rows,
            message:"Details fetched successfully ",
            status :"true"
        })

    }catch(err){
        console.log('------->>>err',err)
    }

}

module.exports = {getstudentinfo}

