const { loadData, saveData } = require("../../database");
const path = require("path")
const fs = require("fs")
module.exports = (req,res) => {
  const {id} = req.params
  const products = loadData('products')

  const productsLessOne = products.filter(p => p.id !== +id)
  const productDestroy = products.find(p => p.id === +id)

  const pathFiles = productDestroy.image.map(filename =>
    path.join(__dirname, "../../../public/images/products/", filename)
  );
  
  pathFiles.forEach(pathFile => {
    const existFile = fs.existsSync(pathFile);
    if (existFile) {
      fs.unlinkSync(pathFile);
    }
  });
  saveData(productsLessOne)

  res.redirect("/admin/productos")
}


