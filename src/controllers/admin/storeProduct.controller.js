const db = require('../../db/models')
const { loadData, saveData } = require('../../database');

module.exports = (req, res) => {
    const { name, description, featuredDescription, category, price, talle1, talle2, talle3, talle4, talle5, black, beige, blue, white, red, green, purple, orange, lightblue, gray, lavender, pink, silver, bluishGreen, gold, neworsale, available } = req.body;
    let products = loadData();
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
    // CREAR PRODUCTO EN EL JSON

    // NUEVO ID
    const newID = products[products.length -1].id + 1;
    // MAPEO DE NOMBRES DE LAS IMÁGENES
    let newImagesName = [];
    
    if(req.files.length){
        newImagesName = req.files.map(img => img.filename);
    }

    // CATEGORIAS POR NOMBRE
    const categoriesName = {
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
    }
    // CREACIÓN DEL PRODUCTO
    const newProduct = {
        id: +newID,
        image: newImagesName.length? newImagesName : [],
        name: name.trim(),
        description: description.trim(),
        featuredDescription: featuredDescription.trim(),
        category: categoriesName[+category],
        sizes: sizesArrayStore,
        colors: colorsArrayStore,
        price: +price,
        new: neworsale === "new",
        sale: neworsale === "sale",
        available: !!available
  
     }
 
     products = [...products, newProduct];
     saveData(products);
}
