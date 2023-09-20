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

characterSchema.statics.list = async function () {
    return await this.find()
    .populate('films', ["_id","title"])
    .populate('homeworld', ['_id','name'])
}
characterSchema.statics.get = async function (id) {
    return await this.findById(id)
    .populate('films', ["_id","title"])
    .populate('homeworld', ['_id','name'])
}
characterSchema.statics.insert = async function (character) {
    return await this.create(character)
}
module.exports= characterSchema