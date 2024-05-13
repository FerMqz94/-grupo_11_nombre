const db = require("../../../db/models");
// 200 éxito, 404 error de busqueda, 500 error interno del servidor
module.exports = (req, res) => {
    const { id } = req.params;

    db.Product.findByPk(id, {
        include: ["images", "category", "colors", "sizes"]
    })
    .then(product => {
        if (product) {
            db.Product.findAll({
                include: ["images"]
            })
            .then(products => {
                res.status(200).json({
                    ok: true,
                    data: { product, relatedProducts: products }
                });
            })
            .catch(error => {
                console.error("Error al buscar productos relacionados:", error);
                res.status(500).json({ ok: false, msg: "Error al buscar productos relacionados" });
            });
        } else {
            res.status(404).json({ ok: false, msg: "Producto no encontrado" });
        }
    })
    .catch(error => {
        console.error("Error al buscar el producto:", error);
        res.status(500).json({ ok: false, msg: "Error al buscar el producto" });
    });
};