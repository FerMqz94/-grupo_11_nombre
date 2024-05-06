const db = require('../../db/models')

module.exports = (req,res) => {
  const { id } = req.params;
    const productPromise = db.Product.findByPk(id)
    const categoriesPromise = db.Categories.findAll()
    const sizesPromise = db.Sizes.findAll()
    const colorsPromise = db.Colors.findAll()
    const pivotSizesPromise = db.Products_Sizes.findAll({ where: { id_product: id }, include: [db.Sizes] })
    const pivotColorsPromise = db.Products_Colors.findAll({ where: { id_product: id }, include: [db.Colors] })
    const imagesPromise = db.Images.findAll({ where: { id_product: id }})

    Promise.all([categoriesPromise, colorsPromise, sizesPromise, pivotSizesPromise, pivotColorsPromise, imagesPromise, productPromise])
    .then(([categories, sizes, colors, pivotSizes, pivotColors, product]) => {
      res.render("./admin/editProduct", {
        categories, sizes, colors, pivotSizes, pivotColors, product
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


