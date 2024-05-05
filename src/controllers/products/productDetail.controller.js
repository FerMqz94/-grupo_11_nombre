// const { loadData } = require("../../database");

// const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

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

module.exports = (req, res)=>{
  const { id } = req.params;
  db.Product.findByPk(id, {
    include: [Images],
  }).then((Product)=>{
  db.Product.findByPk(id, {
    include: [images],
  }).then((products)=>{
  const productsFind = products.find(p => p.id === +id) 
  if (productsFind) {
    
  res.render("products/productDetail", {product: productsFind, toThousand, products  } )
  } else {
    const image = req.file
      res.redirect("products/vista-no-encontrada")
  }
})


    res.render("/id",{
      product
    });
  };
