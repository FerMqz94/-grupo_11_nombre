const db = require('../../db/models');
const { loadData, saveData } = require("../../database");
const path = require("path");
const fs = require("fs");

module.exports = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await db.Product.findByPk(id);

    if (!product) {
      return res.status(404).send('Producto no encontrado');
    }

    const productDestroy = loadData().find(p => p.id === +id);
    
    if (!productDestroy) {
      return res.status(404).send('Producto no encontrado en el JSON');
    }

    const pathFiles = productDestroy.image.map(filename =>
      path.join(__dirname, "../../../public/images/products/", filename)
    );

    pathFiles.forEach(pathFile => {
      if (fs.existsSync(pathFile)) {
        fs.unlinkSync(pathFile);
      }
    });

    await product.destroy();

    const productsLessOne = loadData().filter(p => p.id !== +id);
    saveData(productsLessOne);

    res.redirect('/admin/productos');
  } catch (error) {
    console.error(error);
    res.status(500).send('Se produjo un error al eliminar el producto');
  }
};