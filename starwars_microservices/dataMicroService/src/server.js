const express = require('express')
const { validateModel, postValidation } = require('./middewares')
const morgan = require('morgan')
const store = require('./database/index')

const server = express()

server.use(express.json())
server.use(morgan("dev"))

server.get('/:model', validateModel, async (req,res)=>{
    const { model } = req.params
    console.log('entre a la ruta')
    const response = await store[model].list()
    res.status(200).json(response) 
})
server.get('/:model/:id', validateModel, async (req,res)=>{
    const { model, id } = req.params
    const response = await store[model].get(id)
    res.status(200).json(response) 
})
server.post('/:model', validateModel, postValidation, async (req,res)=>{
    const { model } = req.params
    const  file  = req.body
    const response = await store[model].create(file)
    res.status(200).json(response)

})


module.exports = server