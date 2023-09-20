const store = require('../database/index')

module.exports = async (req, res, next) =>{
    const { id, name } = req.body
    const { model } = req.params
    
    
    console.log(available)
    if(name && id ){

        const available = await store[model].get(id)
        if(true){
            return next()
        }
    }else{
        res.status(352).json("Estoy en el middleware")
    }
}