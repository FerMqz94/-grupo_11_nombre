const db = require("../../db/models");

module.exports = (req, res) => {

    db.Product.findAll({
        include: ["images", "category", "colors", "sizes"]
    })
    .then((products) => { 
        res.render('products/list', {products}  
           )
        
        })
    }
