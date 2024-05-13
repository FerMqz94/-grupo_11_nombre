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
const products = require(".");
const db = require("../../db/models");
module.exports = (req, res) => {
  const { id } = req.params;
  const colorsPromise = db.Colors.findAll()
  const sizesPromise = db.Sizes.findAll()
  const pivotSizesPromise= db.Products_Sizes.findAll()
  const pivotColorsPromise= db.Products_Colors.findAll()
  
  const productPromise = db.Product.findByPk(id,{
    include:[
      "images"
    ]
  })
 
  res.send(products)
  Promise.all([colorsPromise,sizesPromise,pivotSizesPromise,pivotColorsPromise,productPromise])

  .then(([colors, sizes, pivotSizes, pivotColors, product] ) => {
  
    res.render("products/productDetail", { colors, sizes, pivotSizes, pivotColors, product } )
 
  })
  
  .catch((err) => {
    res.send(err.message);
});


}



  

  