const db = require("../db/models")

module.exports = (req, res, next) => {
    db.Categories.findAll()
        .then(categories => {
            res.locals.categorias = categories;
            next();
        })
  };