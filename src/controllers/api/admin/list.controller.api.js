// const db = require("../../db/models");
// 200 éxito, 404 error de busqueda, 500 error interno del servidor
// module.exports = (req, res) => {
    
//     db.Product.findAll({
//         include: ["images", "category", "colors", "sizes"]
//     })
//     .then(products => {
//         res.status(200).json({
//             ok: true,
//             data: products
//         });
//     })
//     .catch(error => {
//         console.error("Error al buscar productos:", error);
//         res.status(500).json({
//             ok: false,
//             msg: "Error al buscar productos"
//         });
//     });
// };