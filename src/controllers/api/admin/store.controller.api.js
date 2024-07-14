/*const db = require("../../../db/models")

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
}*/


const db = require("../../../db/models")
const fs = require('fs')
const path = require('path')

module.exports = (req,res) => {

    const { name, description, featuredDescription, id_category, price, sizesArrayStore, /*talle1, talle2, talle3, talle4, talle5,*/ /*black, beige, blue, white, red, green, purple, orange, lightblue, gray, lavender, pink, silver, bluishGreen, gold,*/ colorsArrayStore, neworsale, available } = req.body;


    console.log(req.body)

    /* //////FUNCIONES PARA COLORES//////

     let colorsArrayStore = [];
     let colorsAGuardar;
 
     const colorsArray = (color, colorsArrayStore) => {
       if(color) {  
         colorsAGuardar = +color;
         return colorsArrayStore.push(colorsAGuardar)
       }
     }
     colorsArray(black, colorsArrayStore)
     colorsArray(beige, colorsArrayStore);
     colorsArray(blue,  colorsArrayStore);
     colorsArray(white, colorsArrayStore);
     colorsArray(red, colorsArrayStore);
     colorsArray(green, colorsArrayStore);
     colorsArray(purple, colorsArrayStore);
     colorsArray(orange, colorsArrayStore);
     colorsArray(lightblue, colorsArrayStore);
     colorsArray(gray, colorsArrayStore);
     colorsArray(lavender, colorsArrayStore);
     colorsArray(pink, colorsArrayStore);
     colorsArray(silver, colorsArrayStore);
     colorsArray(bluishGreen, colorsArrayStore),
     colorsArray(gold, colorsArrayStore)
     */
    
  /*    ///// FUNCIÓN PARA TALLES////
 
     let sizesArrayStore = [];
     let sizesAGuardar;
 
     const sizesArray = (size, sizesArrayStore) => {
         if(size) {
          sizesAGuardar = +size;
          return sizesArrayStore.push(sizesAGuardar)
         }
     }
 
     sizesArray(talle1, sizesArrayStore)
     sizesArray(talle2, sizesArrayStore)
     sizesArray(talle3, sizesArrayStore)
     sizesArray(talle4, sizesArrayStore)
     sizesArray(talle5, sizesArrayStore)*/


    db.Product.create({
            //    image: newImages,
               name: name.trim(),
               description: description.trim(),
               featuredDescription: featuredDescription.trim(),
               id_category: +id_category,
               price: +price,
               new: neworsale === "new",
               sale: neworsale === "sale",
               available: !!available
    })
    .then((product) => {

        //MAPEO DEL REQ.FILES PARA OBTENER EL ARRAY DE FILENAME DE LAS IMÁGENES
      let newImages = [];
      if(req.files.length){
          newImages = req.files.map(img => {
              return {
                  name: img.filename,
                  id_product: product.id
              }
          } );
      }

      db.Images.bulkCreate(newImages)
      .then(() => {

          let newSizesinPivot = [];
          if(sizesArrayStore.length){
              newSizesinPivot = sizesArrayStore.map(size => {
                  return {
                      id_product: product.id,
                      id_size: size
                  }
              });
          }

          db.Products_Sizes.bulkCreate(newSizesinPivot)
          .then(() => {
              let newColorsinPivot = [];
              if(colorsArrayStore.length){
                  newColorsinPivot = colorsArrayStore.map(color => {
                      return {
                          id_product: product.id,
                          id_color: color,
                       
                      }
                  });
              }

              db.Products_Colors.bulkCreate(newColorsinPivot)
             .then(() => {
                 res.status(201).json({
                 ok:true,
                 msg:"Producto creado con éxito"
                })
            })
        })
            
    })
}) 
}