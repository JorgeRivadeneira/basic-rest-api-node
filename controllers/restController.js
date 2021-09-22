
module.exports.getHome = (req, res, next) => {
    res.status(200).json({
        ok: true,
        msg: 'GET from Home'
    });
}

module.exports.postHome = (req, res, next) => {
    res.status(200).json({
        ok: true,
        msg: 'POST from Home'
    });
}