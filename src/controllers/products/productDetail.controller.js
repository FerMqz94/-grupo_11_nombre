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

// const db = require("../../db/models");
// const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

// module.exports = (req, res)=>{
//   const { id } = req.params;
  
//   db.Product.findByPk(id, {
//     include: ["images", "category", "color", "sizes"]
  
//   }).then((products)=>{
  
//   const productsFind = products.find(p => p.id === +id) 
//   if (productsFind) {
    
//   res.render("products/productDetail", {product: productsFind, toThousand, products  } )
//   } else {

//     console.log(product);
//       res.redirect("products/vista-no-encontrada")
//   }
// })


//     res.render("/id",{
//       product
//     });
//   }

module.exports = (req, res) => {
  const { id } = req.params;

  db.Product.findByPk(id, {
      include: ["images", "category", "color", "sizes"]
  })
  .then(product => {
      if (product) {
          db.Product.findAll({
              include: ["images"]
          })
          .then(products => {
              res.render("products/productDetail", { product, products });
          })
          .catch(error => {
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