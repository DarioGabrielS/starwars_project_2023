const ClientError = require("../utils/errors")

module.exports = (req,res)=>{
    const {name} = req.body
    if (name) return next()
    else throw new ClientError('Must provide a name for the film', 440)
}