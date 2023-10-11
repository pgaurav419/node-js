module.exports= reqFilter = (req, res, next) => {
    // console.log("reqFilter");
    if (!req.query.age) {
        res.send("PLEASE PROVIDE AGE")
    }
    else {
        next()
    }
}