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
/*
{
    "_id": "35",
    "name": "Malastare",
    "rotation_period": "26",
    "orbital_period": "201",
    "diameter": "18880",
    "climate": "arid, temperate, tropical",
    "gravity": "1.56",
    "terrain": "swamps, deserts, jungles, mountains",
    "surface_water": "unknown",
    "residents": ["41"],
    "films": []
  },
*/