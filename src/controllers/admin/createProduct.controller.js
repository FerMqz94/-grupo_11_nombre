const db = require('../../db/models')

module.exports = (req, res) => {

  db.Categories.findAll()
  .then((categories) => {
    res.render("./admin/createProduct", {
      categories
    }, (err,content) => {
      err && res.send(err.mesage)
      res.render('partials/dashboard', {
        contentView:content
      })
    })
  })
}



