const { loadData, saveData } = require('../../database');

module.exports = (req, res) => {
    const products = loadData();
    const { name, description, featuredDescription, category, colors, price, size, neworsale, available } = req.body;
    const newID = products[products.length -1].id + 1;

    const newProduct = {
        id: newID,
        name: name.trim(),
        description: description.trim(),
        featuredDescription: featuredDescription.trim(),
        category:,
        colors:,
        price: +price,
        size:,
        new:
        sale:,
        available:,

        
    }



    res.redirect('/admin/productos')
}