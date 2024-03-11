const { loadData, saveData } = require('../../database');

module.exports = (req, res) => {
    const products = loadData();
    const { name, description, featuredDescription, category, colors, price, size, neworsale, available } = req.body;
    const newID = products[products.length -1].id + 1;

    res.send(req.body)

   // const newProduct = {
      //  id: newID,
     //   name: name.trim(),
    //    description: description.trim(),
        featuredDescription: featuredDescription.trim(),
      //  category:,
        //colors:,
        //price: +price,
      //  size:,
        //new: neworsale === "new",
       // sale: neworsale === "sale"
        //available:,

        
    //}



    res.redirect('/admin/productos')
}