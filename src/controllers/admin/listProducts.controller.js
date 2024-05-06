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


const db = require("../../db/models");

module.exports = (req, res) => {

db.products.findAll({
    include:[
    {
        association:"images",
        attributes:['file'],
        },
    {
        association:"colors" ,
        attributes:['name']
    },
    {
        association:"sizes",
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