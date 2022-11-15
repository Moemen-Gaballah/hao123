const productsModel = require('../models/productsModels')

exports.getHome = (req, res, next) => {

    res.render('index')
}