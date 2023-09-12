module.exports = (req,res,next)=>{
    
    const {name} = req.body
    if (name) return next()
    else throw Error ('Name is required')
    
}