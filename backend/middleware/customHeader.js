const customHeader = (req, res, next) => {
    try {
        const apiKey = req.headers.api_key;
        if (apiKey === 'iyustlop') {
            next()
        } else {
            res.status(403)
            res.send({error: "APY_KEY NO ES CORRECTA"})
        }
    }catch (err){
        res.status(403)
        res.send({error: "Algo ocurrio en en customheader"})

    }
    next()
}

module.exports = customHeader