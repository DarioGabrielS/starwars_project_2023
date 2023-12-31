const express = require('express')
const router = require('../src/routes/index')
const morgan = require('morgan')

const server = express()

server.use(morgan("dev"))
server.use(express.json())
server.use('/planets',router)

server.use((err,req,res,next)=>{
    res.status(err.statusCode).json({
        error: true,
        message: err.message
    })
})
server.use('*',(req,res)=>{
    res.status(404).send('Not found')
})
module.exports = server