module.exports= (req, res, next)=>{
    const { model } = req.params
    console.log(model, 'este es model dentro del validate')
    if(['Character', 'Film', 'Planet'].includes(model)){
        console.log('entre al if en parte true')
        return next()
    } else {
        throw Error ('Not a valid model')
    }
}