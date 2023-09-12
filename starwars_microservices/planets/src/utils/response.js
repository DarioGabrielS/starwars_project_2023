module.exports = (res,statusCode, data)=>{

    res.status(statusCode=401).json({
        error: false,
        data,
    })
}