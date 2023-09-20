const express = require('express')

const morgan = require('morgan')
const store = require('./database/index')

const server = express()

server.use(express.json())
server.use(morgan("dev"))

server.get('/:model', async (req,res)=>{
    const { model } = req.params
    const response = await store[model].list()
    res.status(200).json(response)
})
server.get('/:model/:id', async (req,res)=>{
    const { model, id } = req.params
    const response = await store[model].get(id)
    res.status(200).json(response) 
})
server.post('/:model', async (req,res)=>{
    const { model } = req.params
    const  file  = req.body
    const response = await store[model].create(file)
    res.status(200).json(response)

})


module.exports = server