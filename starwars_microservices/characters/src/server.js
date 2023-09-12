const express = require('express')
const router = require('./routes/index')
const morgan = require('morgan')
const { response } = require('./utils')

const server = express()

server.use(morgan("dev"))
server.use(express.json())

server.use(router)

server.use('*', (req, res)=>{
    res.status(404).send('Not Found')
})

server.use((err,req,res,next)=>{

    
})
module.exports=server