const db = require("../../../db/models");

module.exports = (req, res) => {

    db.Product.findAll({
        include: ["images", "category", "colors", "sizes"],
        attributes : {
            exclude: ["createdAt", "updatedAt", "deletedAt"]
        }
    })
    .then((products) => { 
        res.status(200).json({
            ok: true,
            data: products
        })
    })
    .catch(err => {
        res.status(500).json({
            ok: false,
            msg: err.message
        })
    })
}

