const { loadData } = require("../../database");

// const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

// module.exports = (req, res) => {
//   const { keywords } = req.query
//   const products = loadData();
//   const lowerCaseKeywords = keywords ? keywords.toLowerCase() : '';
//   const productsFilter = products.filter(
//     (p) => p.name.includes(lowerCaseKeywords) ||
//       (p).description.includes(lowerCaseKeywords))
//   res.render('other/results',
//     {
//       products: productsFilter,
//       keywords, toThousand
//     })
// }

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const db = require("../../db/models");

module.exports = async (req, res) => {
  try {
    const { keywords } = req.query;
    const lowerCaseKeywords = keywords ? keywords.toLowerCase() : '';
    
    const products = await db.Product.findAll({ include: [{ association: "images" }] });
    
    const filteredProducts = products.filter(
      (p) => p.name.toLowerCase().includes(lowerCaseKeywords) ||
             p.description.toLowerCase().includes(lowerCaseKeywords)
    );
    
    res.render('other/results', { products: filteredProducts, keywords, toThousand });
  } catch (error) {
    console.error('Error en el controlador de búsqueda:', error);
    res.status(500).send('Error en el servidor');
  }
};