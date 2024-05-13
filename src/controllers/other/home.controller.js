// const { loadData } = require("../../database");

// module.exports = (req,res) => {
//   const products = loadData()
//     res.render("./other/home", {products})
//   }
const db = require("../../db/models");
module.exports = (req,res) => {
    db.Product.findAll({
        // attributes: 
        // {
        //     exclude: [
        //       "createdAt",
        //       "updatedAt",
        //     ],
        //   },
          include: [
            {
              association: "images",
            //   attributes: ["file"],
            },
          ],
    })
 .then((products)=>{
//  return res.send(products)

  res.render("./other/home", {products})
})
 
  }

