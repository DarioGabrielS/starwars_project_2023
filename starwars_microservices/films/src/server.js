const express = require('express')
const router = require('./routes/index')
const morgan = require('morgan')

const server = express()

server.use(morgan("dev"))
server.use(express.json())

server.use(router)

server.use('*', (req,res)=>{
    res.status(404).send('Not found')
})

server.use((err,req,res,next)=>{
    res.status(err.statusCode || 500).send({
        error: true,
        message: err.message
    })
})
module.exports= server