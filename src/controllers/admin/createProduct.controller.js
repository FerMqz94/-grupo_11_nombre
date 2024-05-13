const db= require('../../db/models');

module.exports = (req, res) => {

const categoriesPromise =  db.Categories.findAll();
const colorsPromise = db.Colors.findAll();
const sizesPromise = db.Sizes.findAll();

Promise.all([categoriesPromise, colorsPromise, sizesPromise])
.then(([categories, colors, sizes]) => {

  res.render("./admin/createProduct", {
    categories, colors, sizes
  }, (err,content) => {
    err && res.send(err.mesage)
    res.render('partials/dashboard', {
      contentView:content
    })
  })
})
}


