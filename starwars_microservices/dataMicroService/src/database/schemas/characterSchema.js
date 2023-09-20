const { Schema } = require('mongoose')

const characterSchema = new Schema({
    _id: String,
    name:{
        type: String,
        required: true,
        unique: true
    },
    height: String,
    mass: String,
    hair_color: String,
    skin_color: String,
    eye_color: String,
    birth_year: String,
    gender:{
        type: String,
        enum: ['male','female','none','hermaphrodite','n/a','other']

    },
    homeworld:{
        type:String,
        ref:'Planet'
    },
    films:[{
        type: String,
        ref: 'Film'
    }]
})

module.exports= characterSchema