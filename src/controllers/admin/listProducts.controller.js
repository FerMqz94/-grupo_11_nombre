const db = require("../../db/models");

// module.exports = (req, res) => {

// db.Product.findAll({
//     include:[
//     {
        // association:"images",
//         attributes:['id_product'],
//         },
//     {
//         association:"productColors" ,
//         attributes:['id_color']
//     },
//     {
//         association:"productSizes",
//         attributes:['id_size']
//     }
// ],
// })
// .then((products)=>{
//     res.render("admin/listProducts", { 
//         products
//     }, 
//     (err, content) => {

    
//                 err && res.send(err.message)
//                 res.render("partials/dashboard", {
//                 contentView: content
//                 })
// });
// })
// .catch((err) => {
//     res.send(err.message)
// })
    
//     };
module.exports = (req, res) => {
    db.Product.findAll({
        include: [
            {
                model: db.image,
                association:"images",
        attributes:['id_product'],
            },
            {
                model: db.ProductColor,
                association:"productColors" ,
                        attributes:['id_color'],
                as: 'productColors'
            },
            {
                model: db.ProductSize,
                association:"productSizes",
                attributes:['id_size'],
                as: 'productSizes'
            }
        ]
    })
    .then((products) => {
        res.render("admin/listProducts", { 
            products
        }, (err, content) => {
            if (err) {
                res.send(err.message);
            } else {
                res.render("partials/dashboard", {
                    contentView: content
                });
            }
        });
        console.log(products);
    })
    .catch((err) => {
        res.send(err.message);
    });
  };