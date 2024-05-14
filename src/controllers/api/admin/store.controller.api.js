const db = require("../../../db/models")

module.exports = (req,res) => {

    const { name, description, featuredDescription, category, price, talle1, talle2, talle3, talle4, talle5, black, beige, blue, white, red, green, purple, orange, lightblue, gray, lavender, pink, silver, bluishGreen, gold, neworsale, available } = req.body;

    // let newImages = [];
    // if(req.files.length){
    //     newImages = req.files.map(img => {
    //         return {
    //             name: img.filename,
    //         }
    //     } );
    // }

    db.Product.create({
            //    image: newImages,
               name: name.trim(),
               description: description.trim(),
               featuredDescription: featuredDescription.trim(),
               id_category: +category,
               price: +price,
               new: neworsale === "new",
               sale: neworsale === "sale",
               available: !!available
    })
    .then(() => {
        res.status(201).json({
            ok:true,
            msg:"Producto creado con éxito"
        })
    })
}