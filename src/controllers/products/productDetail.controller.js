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
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = (req, res)=>{
  const { id } = req.params;
  
  db.Product.findByPk(id, {
    
  
  }).then((products)=>{
  
  const productsFind = products
  
  if (productsFind) {
   
  res.render("products/productDetail", {product: productsFind, toThousand, products  } )
  } else {

    console.log(products);
      res.redirect("products/vista-no-encontrada")
  }
})

}
  

  