const mongoose = require('mongoose')
const  { MONGO_URI }  = require('../config/envs.js')

const conn = mongoose.createConnection('mongodb+srv://admin:admin@myatlasclusteredu.lr3of2a.mongodb.net/starwars' )


module.exports={
    Character: conn.model('Character', require('./schemas/characterSchema')),
    Film: conn.model('Film', require('./schemas/filmSchema')),
    Planet: conn.model('Planet', require('./schemas/planetSchema'))
}

