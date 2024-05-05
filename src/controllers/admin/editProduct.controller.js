

const { loadData } = require('../../database')

module.exports = (req,res) => {
    const products = loadData('products');
    const categories = loadData('categories')
    const sizes = loadData('sizes');
    const colors = loadData('colors');
    const { id } = req.params;

    const product = products.find((p) => p.id === +id);

    res.render("./admin/editProduct", {
      product, categories, sizes, colors
    }, (err,content) => {
      if (err) {
        // Manejar el error fuera del callback
        console.error(err.message);
        return res.send(err.message);
      }
      res.render('partials/dashboard', {
        contentView:content
      })
    })
}


