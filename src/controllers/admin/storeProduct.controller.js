const { loadData, saveData } = require('../../database');

module.exports = (req, res) => {
    const products = loadData();
    const { name, description, featuredDescription, category, colors, price, size } = req.body;
    res.redirect('/admin/productos')
}