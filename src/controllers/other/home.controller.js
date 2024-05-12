// const { loadData } = require("../../database");
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

