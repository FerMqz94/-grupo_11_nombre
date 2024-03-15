const { loadData } = require("../../database");

module.exports = (req,res) => {
  const products = loadData()
    res.render("./cart/cart", {products})
  }

