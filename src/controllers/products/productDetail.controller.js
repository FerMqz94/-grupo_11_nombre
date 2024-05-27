// const { loadData } = require("../../database");
// module.exports = (req, res) => {
//   const { id } = req.params;
//     const products = loadData()
//     const productsFind = products.find(p => p.id === +id) 
//     if (productsFind) {
      
//     res.render("products/productDetail", {product: productsFind, toThousand, products  } )
//     } else {
//       const image = req.file
//         res.redirect("products/vista-no-encontrada")
//     }
// }

const db = require("../../db/models");
module.exports = (req, res) => {
  const { id } = req.params;
  const sizesPromise = db.Sizes.findAll()
  const colorsPromise = db.Colors.findAll()
  const productPromise = db.Product.findByPk(id, {
      include: ["images", "category", "colors", "sizes"]
    })
  Promise.all([sizesPromise, colorsPromise, productPromise])
  .then(([sizes, colors, product]) => {
      if (product) {
          db.Product.findAll({
              include: ["images"]
          })
          .then(products => {
              res.render("products/productDetail", { sizes, colors, product, products });
          })
          .catch(error => {
              console.error("Error", error)
              res.redirect("/products/vista-no-encontrada");
          });
      } else {
          res.redirect("/products/vista-no-encontrada");
      }
  })
  .catch(error => {
      console.error("Error al buscar el producto:", error);
      res.redirect("/products/vista-no-encontrada");
  });
};


  

  