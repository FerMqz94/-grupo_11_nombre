// const { loadData } = require('../../database')

// module.exports = (req, res) => {
//   const products = loadData();
//   res.render("admin/listProducts", { 
//     products
//    }, (err, content) => {

//     err && res.send(err.message)
//     res.render("partials/dashboard", {
//       contentView: content
//      })
// })};

// const productPromise = db.Product.findAll()
//     const categoriesPromise = db.Categories.findAll()
//     const sizesPromise = db.Sizes.findAll()
//     const colorsPromise = db.Colors.findAll()
//     const pivotSizesPromise = db.Products_Sizes.findAll()
//     const pivotColorsPromise = db.Products_Colors.findAll()
//     const imagesPromise = db.Images.findAll();
//     Promise.all([categoriesPromise, colorsPromise, sizesPromise, pivotSizesPromise, pivotColorsPromise, imagesPromise, productPromise])


const db = require("../../db/models");

module.exports = (req, res) => {

db.Products.findAll({
    include:[
    {
        association:"images",
        attributes:['file'],
        },
    {
        association:"product_colors" ,
        attributes:['name']
    },
    {
        association:"product_sizes",
        attributes:['sizes']
    }
    ],
})
.then((products)=>{
        res.render("admin/listProducts", { 
            products
           }, 
           (err, content) => {
    
                err && res.send(err.message)
                res.render("partials/dashboard", {
                  contentView: content
                 })
})
.catch((err) => {
    res.send(err.message)
})
    
    })};