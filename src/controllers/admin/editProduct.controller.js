const db = require('../../db/models')

module.exports = (req,res) => {
    const { id } = req.params;
    const productPromise = db.Product.findByPk( id, {
      include: ["images", "colors", "sizes"]
    })
    const categoriesPromise = db.Categories.findAll()
    const sizesPromise = db.Sizes.findAll()
    const colorsPromise = db.Colors.findAll()
    Promise.all([categoriesPromise, sizesPromise, colorsPromise, productPromise])
    .then(([categories, sizes, colors, product]) => {
      res.render("./admin/editProduct", {
        categories, sizes, colors, product
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
    })
    
}


