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
        "productColors","productSizes","category"
            // {
            //     association:"productColors" ,
            //     attributes:['id_color']
            // },
            // {
            //     association:"productSizes",
            //     attributes:['id_size']
            // },
            // {
            //     association:"category",
            //     attributes:['id_category']
                
                
            // }
         
        ]
    }).then((products) => {
        res.render("admin/listProducts", { 
            Product:products
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