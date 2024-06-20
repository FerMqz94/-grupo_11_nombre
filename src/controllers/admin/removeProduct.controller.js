

const db = require('../../db/models');

module.exports = async (req, res) => {
  const { id } = req.params; RL

  try {
    
    const product = await db.Product.findByPk(id);

    if (!product) {
      return res.status(404).send('Producto no encontrado');
    }

  
    await product.destroy(); s

    res.redirect('/admin/productos'); 
  } catch (error) {
    console.error(error); 
    res.status(500).send('Se produjo un error al eliminar el producto');
  }
};
