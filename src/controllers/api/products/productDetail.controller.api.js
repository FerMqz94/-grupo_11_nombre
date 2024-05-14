const db = require("../../../db/models");
// 200 éxito, 404 error de busqueda, 500 error interno del servidor
module.exports = (req, res) => {
    const { id } = req.params;
    
    const sizesPromise = db.Sizes.findAll();
    const colorsPromise = db.Colors.findAll();
    const productPromise = db.Product.findByPk(id, {
        include: ["images", "category", "colors", "sizes"]
    });

    Promise.all([sizesPromise, colorsPromise, productPromise])
        .then(([sizes, colors, product]) => {
            if (product) {
                db.Product.findAll({
                    include: ["images"]
                })
                .then(products => {
                    res.status(200).json({
                        ok: true,
                        data: {
                            sizes,
                            colors,
                            product,
                            products
                        }
                    });
                })
                .catch(error => {
                    console.error("Error:", error);
                    res.status(500).json({
                        ok: false,
                        error: "Error interno del servidor"
                    });
                });
            } else {
                res.status(404).json({
                    ok: false,
                    error: "Producto no encontrado"
                });
            }
        })
        .catch(error => {
            console.error("Error:", error);
            res.status(500).json({
                ok: false,
                error: "Error interno del servidor"
            });
        });
};