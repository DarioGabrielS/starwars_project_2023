const { Schema } = require('mongoose')

const planetSchema = new Schema({
    _id: String,
    name: String,
    rotation_period:String,
    diameter: String,
    climate: String,
    gravity: String,
    terrain: String,
    surface_water:{
        type:String,
        enum:['unknown','yes','no']
    },
    residents:[String],
    films:[{
        type: String,
        ref:'Film'
    }]

})

module.exports= planetSchema