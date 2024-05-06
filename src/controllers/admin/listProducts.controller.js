const db = require("../../db/models");

module.exports = (req, res) => {
    const productsPromise = db.Product.findAll({
        include: [
            { 
                model: db.Colors,
                as: 'products'
            },
            { 
                model: db.Sizes,
                as: 'products'
            }
        ]
    });
    const categoriesPromise = db.Categories.findAll();
    Promise.all([categoriesPromise, productsPromise])
        .then(([categories, products]) => {
            res.render("admin/listProducts", {
                categories,
                products
            }, (err, content) => {
                if (err) {
                    res.send(err.message);
                } else {
                    res.render("partials/dashboard", {
                        contentView: content
                    });
                }
            });
        })
        .catch((err) => {
            res.send(err.message);
        });
};