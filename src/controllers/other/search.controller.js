const { loadData } = require("../../database");

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = (req, res) => {
    const { keywords } = req.query
    const products = loadData();
    const lowerCaseKeywords = keywords ? keywords.toLowerCase() : '';
    const productsFilter = products.filter(
        (p) => p.name.includes(lowerCaseKeywords) ||
        (p).description.includes(lowerCaseKeywords))
    res.render('other/results',
        {
            products: productsFilter,
            keywords, toThousand
        })
}