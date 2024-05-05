const { loadData } = require('../../database')

module.exports = (req,res) => {
    const products = loadData();
    const { id } = req.params;

    const product = products.find((p) => p.id === +id)

    res.render("./admin/editProduct", {
      product
    }, (err,content) => {
      err && res.send(err.mesage)
      res.render('partials/dashboard', {
        contentView:content
      })
    })
  }



