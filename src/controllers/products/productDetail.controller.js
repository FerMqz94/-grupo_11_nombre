const { loadData } = require("../../database");

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = (req, res) => {
  const { id } = req.params;
    const products = loadData()
    const productsFind = products.find(p => p.id === +id) 
    if (productsFind) {
      
    res.render("products/productDetail", {product: productsFind, toThousand, products  } )
    } else {
      const image = req.file
        res.render("products/productDetail", { image:image })
    }
}