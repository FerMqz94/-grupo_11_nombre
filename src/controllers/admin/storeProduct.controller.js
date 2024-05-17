const db = require('../../db/models')

module.exports = (req, res) => {
    const { name, description, featuredDescription, category, price, talle1, talle2, talle3, talle4, talle5, black, beige, blue, white, red, green, purple, orange, lightblue, gray, lavender, pink, silver, bluishGreen, gold, neworsale, available } = req.body;
    
    //////FUNCIONES PARA COLORES//////

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
    
   
    ///// FUNCIÓN PARA TALLES////

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
    sizesArray(talle5, sizesArrayStore)


    db.Product.create ({
        name: name.trim(),
        description: description.trim(),
        featuredDescription: featuredDescription.trim(),
        id_category: +category,
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
                    res.redirect("/admin/productos");
                })
            })
            
        })
    }) 
}





































// // ACÁ NUEVO CÓDIGO JSON PARA QUE GUARDE IDS

// const { loadData, saveData } = require('../../database');


// module.exports = (req, res) => {

//     //VARIABLES Y CONSTANTES PARA OPERAR CON LOS DATOS
//     let products = loadData();
//     let colors = loadData('colors');
//     let sizes = loadData('sizes')
//     const { name, description, featuredDescription, category, price, talle1, talle2, talle3, talle4, talle5, black, beige, blue, white, red, green, purple, orange, lightblue, gray, lavender, pink, silver, bluishGreen, gold, neworsale, available } = req.body;
//     const newID = products[products.length -1].id + 1;
//     let sizeBooleano;
//     let sizesArrayBoolean = [];
//     let sizesSend = [];
//     let sizeId;


//     let colorsId;
//     let sendColor = []
//     let colorArrayBoolean = [];
//     let colorBoolean;

//     let newImages = [];

//     //////FUNCIONES PARA COLORES//////

//     //GENERAR ARRAY DE BOOLEANOS CON LA iNFORMACIÓN QUE VIENE DESDE EL BODY SI ES "ON" VA A SER TRUE SI ES UNDEFINED FALSE
//    const booleanColors = (color, colorArrayBoolean) => {
//         colorBoolean = !!color;
//         return colorArrayBoolean.push(colorBoolean);
//     }

//     // EJECUCIÓN
//     booleanColors(black, colorArrayBoolean)
//     booleanColors(beige, colorArrayBoolean);
//     booleanColors(blue,  colorArrayBoolean);
//     booleanColors(white, colorArrayBoolean);
//     booleanColors(red, colorArrayBoolean);
//     booleanColors(green, colorArrayBoolean);
//     booleanColors(purple, colorArrayBoolean);
//     booleanColors(orange, colorArrayBoolean);
//     booleanColors(lightblue, colorArrayBoolean);
//     booleanColors(gray, colorArrayBoolean);
//     booleanColors(lavender, colorArrayBoolean);
//     booleanColors(pink, colorArrayBoolean);
//     booleanColors(silver, colorArrayBoolean);
//     booleanColors(bluishGreen, colorArrayBoolean),
//     booleanColors(gold, colorArrayBoolean)

//     // FUNCIÓN PARA GENERAR UN ARRAY CON LOS NOMBRES QUE VIENEN COMO TRUE, LOS DEMÁS SON DESCARTADOS - SE EJECUTA GRACIAS A LA INFORMACIÓN QUE SE OBTIENE DESDE EL COLORS.JSON 
//     const storeColors = (colorArrayBoolean, colors) => {

//        for( let i = 0; i < colors.length; i++){
//         if(colorArrayBoolean[i]){
//             colorsId = colors[i].id;
//             sendColor.push(colorsId);     
//         } 
//        }
//        return sendColor;
//     }

//     //EJECUCIÓN DE LA FUNCIÓN 
//     storeColors(colorArrayBoolean, colors);
    
   
//     ///// FUNCIÓN PARA TALLES////

//     const booleanSizes = (talle, sizesArrayBoolean) => {
//         sizeBooleano = !!talle;
//         return sizesArrayBoolean.push(sizeBooleano);
//     }


//     // EJECUCIÓN

//     booleanSizes(talle1, sizesArrayBoolean);
//     booleanSizes(talle2, sizesArrayBoolean)
//     booleanSizes(talle3, sizesArrayBoolean);
//     booleanSizes(talle4, sizesArrayBoolean);
//     booleanSizes(talle5, sizesArrayBoolean)


//     // STORE SIZES BY ID

//     const storeSizes = (sizesArrayBoolean, sizes) => {

//         for( let i = 0; i < sizes.length; i++){
//          if(sizesArrayBoolean[i]){
//              sizeId = sizes[i].id;
//              sizesSend.push(sizeId);     
//          } 
//         }
//         return sizesSend;
//      }

//     //EJECUCIÓN STORE BY ID
    
//     storeSizes(sizesArrayBoolean, sizes)




//     //MAPEO DEL REQ.FILES PARA OBTENER EL ARRAY DE FILENAME DE LAS IMÁGENES
//    if(req.files.length){
//         newImages = req.files.map(img => img.filename);
//     }


//     const newProduct = {
//        id: newID,
//        image: newImages.length? newImages : [],
//        name: name.trim(),
//        description: description.trim(),
//        featuredDescription: featuredDescription.trim(),
//        category: +category,
//        sizes: sizesSend,
//        colors: sendColor,
//        price: +price,
//        new: neworsale === "new",
//        sale: neworsale === "sale",
//        available: !!available
 
//     }

//     products = [...products, newProduct];
//     saveData(products);

//     res.redirect("/admin/productos");
// }



// storeProducts:
/*const { loadData, saveData } = require('../../database');*/


/*module.exports = (req, res) => {

    //VARIABLES Y CONSTANTES PARA OPERAR CON LOS DATOS
    let products = loadData();
    let colors = loadData('colors');
    let sizes = loadData('sizes');
    const { name, description, featuredDescription, category, price, talle1, talle2, talle3, talle4, talle5, black, beige, blue, white, red, green, purple, orange, lightblue, gray, lavender, pink, silver, bluishGreen, gold, neworsale, available } = req.body;
    const newID = products[products.length -1].id + 1;
    let talleBooleano;
    let tallesArray = [];
    let sendTalle = [];
    let sizesId;
    let colorsId;
    let sendColor = []
    let colorArrayBoolean = [];
    let colorBoolean;
    let newImages = [];

    //////FUNCIONES PARA COLORES//////

    //GENERAR ARRAY DE BOOLEANOS CON LA iNFORMACIÓN QUE VIENE DESDE EL BODY SI ES "ON" VA A SER TRUE SI ES UNDEFINED FALSE
   const booleanColors = (color, colorArrayBoolean) => {
        colorBoolean = !!color;
        return colorArrayBoolean.push(colorBoolean);
    }

    // EJECUCIÓN
    booleanColors(black, colorArrayBoolean)
    booleanColors(beige, colorArrayBoolean);
    booleanColors(blue,  colorArrayBoolean);
    booleanColors(white, colorArrayBoolean);
    booleanColors(red, colorArrayBoolean);
    booleanColors(green, colorArrayBoolean);
    booleanColors(purple, colorArrayBoolean);
    booleanColors(orange, colorArrayBoolean);
    booleanColors(lightblue, colorArrayBoolean);
    booleanColors(gray, colorArrayBoolean);
    booleanColors(lavender, colorArrayBoolean);
    booleanColors(pink, colorArrayBoolean);
    booleanColors(silver, colorArrayBoolean);
    booleanColors(bluishGreen, colorArrayBoolean),
    booleanColors(gold, colorArrayBoolean)

    // FUNCIÓN PARA GENERAR UN ARRAY CON LOS ID QUE VIENEN COMO TRUE, LOS DEMÁS SON DESCARTADOS - SE EJECUTA GRACIAS A LA INFORMACIÓN QUE SE OBTIENE DESDE EL COLORS.JSON 
    const storeColors = (colorArrayBoolean, colors) => {

       for( let i = 0; i < colors.length; i++){
        if(colorArrayBoolean[i]){
            colorsId = colors[i].id;
            sendColor.push(colorsId);     
        } 
       }
       return sendColor;
    }

    //EJECUCIÓN DE LA FUNCIÓN 
    storeColors(colorArrayBoolean, colors);
    
    ///// FUNCIÓN PARA TALLES////

    const storeTalles = (talle, tallesArray) => {
        talleBooleano = !!talle;
        return tallesArray.push(talleBooleano);
    }

    // EJECUCIÓN
    storeTalles(talle1, tallesArray);
    storeTalles(talle2, tallesArray)
    storeTalles(talle3, tallesArray);
    storeTalles(talle4, tallesArray);
    storeTalles(talle5, tallesArray);

    const storeSizes = (tallesArray, sizes) => {

        for( let i = 0; i < sizes.length; i++){
         if(tallesArray[i]){
             sizesId = sizes[i].id;
             sendTalle.push(sizesId);     
         } 
        }
        return sendTalle;
    }

    storeSizes(tallesArray, sizes);

    //MAPEO DEL REQ.FILES PARA OBTENER EL ARRAY DE FILENAME DE LAS IMÁGENES
   if(req.files.length){
        newImages = req.files.map(img => img.filename);
    }


    const newProduct = {
       id: +newID,
       image: newImages.length? newImages : [],
       name: name.trim(),
       description: description.trim(),
       featuredDescription: featuredDescription.trim(),
       category: category?.trim(),
       sizes: sendTalle,
       colors: sendColor,
       price: +price,
       new: neworsale === "new",
       sale: neworsale === "sale",
       available: !!available
 
    }

    products = [...products, newProduct];
    saveData(products);

    res.redirect("/admin/productos");
}

// editProduct:

// const { loadData } = require('../../database')

// module.exports = (req,res) => {
//     const products = loadData('products');
//     const categories = loadData('categories')
//     const sizes = loadData('sizes');
//     const colors = loadData('colors');
//     const { id } = req.params;

//     const product = products.find((p) => p.id === +id);

//     res.render("./admin/editProduct", {
//       product, categories, sizes, colors
//     }, (err,content) => {
//       if (err) {
//         // Manejar el error fuera del callback
//         console.error(err.message);
//         return res.send(err.message);
//       }
//       res.render('partials/dashboard', {
//         contentView:content
//       })
//     })
// }

// updateProduct:
// const { loadData, saveData } = require('../../database');
// const fs = require('fs');

// module.exports = (req, res) => {
//     // Obtener los datos del producto a editar
//     let products = loadData();
//     let colors = loadData('colors');
//     let sizes = loadData('sizes');
//     const { id } = req.params;

//     // Verificar si el producto existe antes de realizar cualquier operación
//     const productIndex = products.findIndex(product => product.id === +id);
//     if (productIndex === -1) {
//         // Si el producto no se encuentra, enviar un mensaje de error y terminar la ejecución
//         console.error('El producto no se encontró');
//         return res.status(404).send('El producto no se encontró');
//     }

//     const { name, description, featuredDescription, category, price, talle1, talle2, talle3, talle4, talle5, black, beige, blue, white, red, green, purple, orange, lightblue, gray, lavender, pink, silver, bluishGreen, gold, neworsale, available } = req.body;
//     let talleBooleano;
//     let tallesArray = [];
//     let sendTalle = [];
//     let sizesId;
//     let colorsId;
//     let sendColor = [];
//     let colorArrayBoolean = [];
//     let colorBoolean;
//     let newImages = [];

//     //////FUNCIONES PARA COLORES//////

//     //GENERAR ARRAY DE BOOLEANOS CON LA INFORMACIÓN QUE VIENE DESDE EL BODY SI ES "ON" VA A SER TRUE SI ES UNDEFINED FALSE
//     const booleanColors = (color, colorArrayBoolean) => {
//         colorBoolean = !!color;
//         return colorArrayBoolean.push(colorBoolean);
//     }

//     // EJECUCIÓN
//     booleanColors(black, colorArrayBoolean);
//     booleanColors(beige, colorArrayBoolean);
//     booleanColors(blue,  colorArrayBoolean);
//     booleanColors(white, colorArrayBoolean);
//     booleanColors(red, colorArrayBoolean);
//     booleanColors(green, colorArrayBoolean);
//     booleanColors(purple, colorArrayBoolean);
//     booleanColors(orange, colorArrayBoolean);
//     booleanColors(lightblue, colorArrayBoolean);
//     booleanColors(gray, colorArrayBoolean);
//     booleanColors(lavender, colorArrayBoolean);
//     booleanColors(pink, colorArrayBoolean);
//     booleanColors(silver, colorArrayBoolean);
//     booleanColors(bluishGreen, colorArrayBoolean);
//     booleanColors(gold, colorArrayBoolean);

//     // FUNCIÓN PARA GENERAR UN ARRAY CON LOS ID QUE VIENEN COMO TRUE, LOS DEMÁS SON DESCARTADOS - SE EJECUTA GRACIAS A LA INFORMACIÓN QUE SE OBTIENE DESDE EL COLORS.JSON 
//     const storeColors = (colorArrayBoolean, colors) => {
//         for (let i = 0; i < colors.length; i++) {
//             if (colorArrayBoolean[i]) {
//                 colorsId = colors[i].id;
//                 sendColor.push(colorsId);     
//             } 
//         }
//         return sendColor;
//     }

//     //EJECUCIÓN DE LA FUNCIÓN 
//     storeColors(colorArrayBoolean, colors);
    
//     ///// FUNCIÓN PARA TALLES////

//     const storeTalles = (talle, tallesArray) => {
//         talleBooleano = !!talle;
//         return tallesArray.push(talleBooleano);
//     }

//     // EJECUCIÓN
//     storeTalles(talle1, tallesArray);
//     storeTalles(talle2, tallesArray);
//     storeTalles(talle3, tallesArray);
//     storeTalles(talle4, tallesArray);
//     storeTalles(talle5, tallesArray);

//     const storeSizes = (tallesArray, sizes) => {
//         for (let i = 0; i < sizes.length; i++) {
//             if (tallesArray[i]) {
//                 sizesId = sizes[i].id;
//                 sendTalle.push(sizesId);     
//             } 
//         }
//         return sendTalle;
//     }

//     storeSizes(tallesArray, sizes);

//     //MAPEO DEL REQ.FILES PARA OBTENER EL ARRAY DE FILENAME DE LAS IMÁGENES
//     // Verificar si se han subido nuevas imágenes
//     if (req.files.length) {
//         // Si hay nuevas imágenes, mapear el req.files para obtener los nombres de archivo y asignarlos a newImages
//         newImages = req.files.map(img => img.filename);
    
//         // Eliminar imágenes anteriores que ya no están presentes en las nuevas imágenes
//         const oldImages = products[productIndex].image;
//         oldImages.forEach(oldImage => {
//             // Verificar si las imágenes antiguas no están presentes en las nuevas imágenes
//             if (!newImages.includes(oldImage)) {
//                 const path = ./public/images/products/${oldImage};
//                 // Eliminar imágenes del sistema de archivos
//                 fs.unlinkSync(path); // Eliminar la imagen del directorio de uploads
//             }
//         });
//     } else {
//         // Si no se han subido nuevas imágenes, mantener las imágenes existentes del producto
//         newImages = products[productIndex].image;
//     }
    
//     const newProduct = {
//         id: +id,
//         image: newImages.length ? newImages : [],
//         name: name.trim(),
//         description: description.trim(),
//         featuredDescription: featuredDescription.trim(),
//         category: category?.trim(),
//         sizes: sendTalle,
//         colors: sendColor,
//         price: +price,
//         new: neworsale === "new",
//         sale: neworsale === "sale",
//         available: !!available
//     }

//     // Reemplazar el producto antiguo con el nuevo
//     products = products.map(product => {
//         if (product.id === +id) {
//             return newProduct;
//         }
//         return product;
//     });

//     // Guardar los datos actualizados
//     saveData(products);

//     // Redirigir a la lista de productos
//     res.redirect("/admin/productos");
// };

// destroyProduct:

// const { loadData, saveData } = require("../../database");
// const path = require("path")
// const fs = require("fs")
// module.exports = (req,res) => {
//   const {id} = req.params
//   const products = loadData()

//   const productsLessOne = products.filter(p => p.id !== +id)
//   const productDestroy = products.find(p => p.id === +id)

//   const pathFiles = productDestroy.image.map(filename =>
//     path.join(__dirname, "../../../public/images/products/", filename)
//   );
  
//   pathFiles.forEach(pathFile => {
//     const existFile = fs.existsSync(pathFile);
//     if (existFile) {
//       fs.unlinkSync(pathFile);
//     }
//   });
//   saveData(productsLessOne)

//   res.redirect("/admin/productos")
// }


















// /*const { loadData, saveData } = require('../../database');


// module.exports = (req, res) => {

//     //VARIABLES Y CONSTANTES PARA OPERAR CON LOS DATOS
//     let products = loadData();
//     let colors = loadData('colors');
//     const { name, description, featuredDescription, category, price, talle1, talle2, talle3, talle4, talle5, black, beige, blue, white, red, green, purple, orange, lightblue, gray, lavender, pink, silver, bluishGreen, gold, neworsale, available } = req.body;
//     const newID = products[products.length -1].id + 1;
//     let talleBooleano;
//     let tallesSend = [];
//     let colorsName;
//     let sendColor = []
//     let colorArrayBoolean = [];
//     let colorBoolean;
//     let newImages = [];

//     //////FUNCIONES PARA COLORES//////

//     //GENERAR ARRAY DE BOOLEANOS CON LA iNFORMACIÓN QUE VIENE DESDE EL BODY SI ES "ON" VA A SER TRUE SI ES UNDEFINED FALSE
//    const booleanColors = (color, colorArrayBoolean) => {
//         colorBoolean = !!color;
//         return colorArrayBoolean.push(colorBoolean);
//     }

//     // EJECUCIÓN
//     booleanColors(black, colorArrayBoolean)
//     booleanColors(beige, colorArrayBoolean);
//     booleanColors(blue,  colorArrayBoolean);
//     booleanColors(white, colorArrayBoolean);
//     booleanColors(red, colorArrayBoolean);
//     booleanColors(green, colorArrayBoolean);
//     booleanColors(purple, colorArrayBoolean);
//     booleanColors(orange, colorArrayBoolean);
//     booleanColors(lightblue, colorArrayBoolean);
//     booleanColors(gray, colorArrayBoolean);
//     booleanColors(lavender, colorArrayBoolean);
//     booleanColors(pink, colorArrayBoolean);
//     booleanColors(silver, colorArrayBoolean);
//     booleanColors(bluishGreen, colorArrayBoolean),
//     booleanColors(gold, colorArrayBoolean)

//     // FUNCIÓN PARA GENERAR UN ARRAY CON LOS NOMBRES QUE VIENEN COMO TRUE, LOS DEMÁS SON DESCARTADOS - SE EJECUTA GRACIAS A LA INFORMACIÓN QUE SE OBTIENE DESDE EL COLORS.JSON 
//     const storeColors = (colorArrayBoolean, colors) => {

//        for( let i = 0; i < colors.length; i++){
//         if(colorArrayBoolean[i]){
//             colorsName = colors[i].name;
//             sendColor.push(colorsName);     
//         } 
//        }
//        return sendColor;
//     }

//     //EJECUCIÓN DE LA FUNCIÓN 
//     storeColors(colorArrayBoolean, colors);
    
//     ///// FUNCIÓN PARA TALLES////

//     const storeTalles = (talle, tallesSend) => {
//         talleBooleano = !!talle;
//         return tallesSend.push(talleBooleano);
//     }

//     // EJECUCIÓN
//     storeTalles(talle1, tallesSend);
//     storeTalles(talle2, tallesSend)
//     storeTalles(talle3, tallesSend);
//     storeTalles(talle4, tallesSend);
//     storeTalles(talle5, tallesSend);

//     //MAPEO DEL REQ.FILES PARA OBTENER EL ARRAY DE FILENAME DE LAS IMÁGENES
//    if(req.files.length){
//         newImages = req.files.map(img => img.filename);
//     }


//     const newProduct = {
//        id: newID,
//        image: newImages.length? newImages : [],
//        name: name.trim(),
//        description: description.trim(),
//        featuredDescription: featuredDescription.trim(),
//        category: category?.trim(),
//        sizes: tallesSend,
//        colors: sendColor,
//        price: +price,
//        new: neworsale === "new",
//        sale: neworsale === "sale",
//        available: !!available
 
//     }

//     products = [...products, newProduct];
//     saveData(products);

//     res.redirect("/admin/productos");
// } */