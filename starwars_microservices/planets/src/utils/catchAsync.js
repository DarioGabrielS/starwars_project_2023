module.exports = (fn)=>{
    return function (res, res, next) {
        fn(req,res).catch((err)=>next(err))
    }
}