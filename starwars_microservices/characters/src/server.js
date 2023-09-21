const express = require('express')
const router = require('./routes/index')
const morgan = require('morgan')
const axios = require('axios')
const server = express()

server.use(morgan("dev"))
server.use(express.json())

server.use('/characters', router)

server.use((err,req,res,next)=>{
    res.status(err.statusCode || 500).send({
        error: true,
        message: err.message
    })

})
server.use('*', (req, res)=>{
    res.status(404).send('Not Found')
})
module.exports=server