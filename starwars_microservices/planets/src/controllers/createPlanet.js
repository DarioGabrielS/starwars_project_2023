const Planets = require('../data')
const {response}  = require('../utils')

module.exports = async (req,res)=>{
    const {name, size, distance} = req.body
    const newPlanet = await Planets.create(name, size, distance)
    response(res, 200, newPlanet)
}