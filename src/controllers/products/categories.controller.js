const db = require("../../db/models");
const categoryMap = {
    "abrigos": 1,
    "jeans": 2,
    "buzos-y-sweaters": 3,
    "remeras": 4,
    "camisas-y-blusas": 5,
    "tops": 6,
    "pantalones-y-shorts": 7,
    "vestidos-y-polleras": 8,
    "capsula-beige": 9,
    "capsula-american": 10,
    "capsula-3024": 11,
    "sin-categoria": 12
};
const categories = {
    1: "Abrigos",
    2: "Jeans",
    3: "Buzos y sweaters",
    4:"Remeras",
    5:"Camisas y blusas",
    6:"Tops",
    7:"Pantalones y shorts",
    8:"Vestidos y polleras",
    9:"Cápsula Beige",
    10:"Cápsula American",
    11:"Cápsula 3024",
    12:"Sin categoría"
};
module.exports = (req, res) => {
    const { categoryName } = req.params
    const categoryId = categoryMap[categoryName.toLowerCase()];
    const categoriesName = categories[categoryId]
    db.Product.findAll({
        where:{ id_category: categoryId },
        include: ["images", "category", "colors", "sizes"]
    })
    .then((products) => { 
        res.render('products/categories', {products, categoriesName}  
           )
        
        })
    }