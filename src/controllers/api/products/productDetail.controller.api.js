const db = require("../../../db/models");
// 200 éxito, 404 error de búsqueda, 500 error del servidor
module.exports = (req, res) => {
  const { id } = req.params;

  db.Product.findByPk(id, {
    include: ["images", "category", "sizes", "colors"]
  })
  .then(product => {
    if (!product) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }
    const productData = {
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category ? product.category.name : null,
      sizes: product.sizes.map(size => size.name),
      colors: product.colors.map(color => color.name),
      images: product.images.map(image => image.name) 
    };

    res.status(200).json({ok: true, data: productData});
  })
  .catch(error => {
    console.error("Error al buscar el producto:", error);
    res.status(500).json({ ok: false, error: "Error interno del servidor" });
  });
};