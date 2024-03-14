const { saveData, loadData } = require('../../database')

module.exports = (req,res) => {
    const {id} = req.params

    const products = loadData()

    const productLessOne = products.filter(p => p.id !== +id)

    saveData(productLessOne);

    res.redirect("/admin/productos")
};