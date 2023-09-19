const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const server = express()
server.use(express.json())
server.use(morgan("dev"))
server.use(cors)



module.exports = server