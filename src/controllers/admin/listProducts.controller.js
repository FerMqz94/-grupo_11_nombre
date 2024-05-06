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