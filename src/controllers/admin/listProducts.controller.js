const db = require("../../db/models");

module.exports = (req, res) => {

    db.Product.findAll({
        include: ["images", "category", "colors", "sizes"]
    })
    .then((products) => { 
        res.render('./admin/listProducts', {products}, (err,content) => {
            err && res.send(err.mesage)
            res.render('partials/dashboard', {
              contentView:content
            })
        })
    })
}