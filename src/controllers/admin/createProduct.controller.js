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










/*const db = require('../../db/models')

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
}*/


/*const {loadData} = require('../../database');

module.exports = (req, res) => {
const categories = loadData('categories');
const colors = loadData('colors');
const sizes = loadData('sizes');

res.render("./admin/createProduct", {
  categories, colors, sizes
}, (err,content) => {
  err && res.send(err.mesage)
  res.render('partials/dashboard', {
    contentView:content
  })
})

}*/



