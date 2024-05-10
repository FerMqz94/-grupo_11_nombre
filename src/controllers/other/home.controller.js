// const { loadData } = require("../../database");
const db = require("../../db/models");
module.exports = (req,res) => {
 db.Product.findAll()
 .then((products)=>{
//  return res.send(products)

  
})
 res.render("./other/home",)
  }

