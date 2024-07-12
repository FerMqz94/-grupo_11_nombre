const db = require('../../db/models');
const { loadData, saveData } = require('../../database');
const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
    const { id } = req.params;
    const { name, description, featuredDescription, category, price, talle1, talle2, talle3, talle4, talle5, black, beige, blue, white, red, green, purple, orange, lightblue, gray, lavender, pink, silver, bluishGreen, gold, neworsale, available } = req.body;
    let products = loadData();

    // Actualizar el producto en la base de datos
    db.Product.findByPk(id, { include: ['images', 'sizes', 'colors'] })
        .then(product => {
            if (!product) {
                console.error('El producto no se encontró');
                return res.status(404).send('El producto no se encontró');
            }

            // Actualizar el producto
            return product.update({
                name: name.trim(),
                description: description.trim(),
                featuredDescription: featuredDescription.trim(),
                id_category: +category,
                price: +price,
                new: neworsale === "new",
                sale: neworsale === "sale",
                available: !!available
            }).then(() => {
                // Eliminar tallas no seleccionadas
                const sizesArrayStore = [talle1, talle2, talle3, talle4, talle5].filter(size => size !== undefined);
                const sizesArray = sizesArrayStore.map(Number);
                return db.Products_Sizes.destroy({ where: { id_product: +id } })
                    .then(() => db.Products_Sizes.bulkCreate(sizesArray.map(size => ({
                        id_product: +id,
                        id_size: size
                    }))));
            }).then(() => {
                // Eliminar colores no seleccionados
                const colorsArrayStore = [black, beige, blue, white, red, green, purple, orange, lightblue, gray, lavender, pink, silver, bluishGreen, gold].filter(color => color !== undefined);
                const colorsArray = colorsArrayStore.map(Number);
                return db.Products_Colors.destroy({ where: { id_product: +id } })
                    .then(() => db.Products_Colors.bulkCreate(colorsArray.map(color => ({
                        id_product: +id,
                        id_color: color
                    }))));
            }).then(() => {
                // Eliminar imágenes antiguas no seleccionadas solo si hay nuevas imágenes
                if (req.files.length > 0) {
                    const oldImages = product.images.map(image => image.name);
                    const newImages = req.files.map(img => img.filename);
                    const imagesToDelete = oldImages.filter(oldImage => !newImages.includes(oldImage));
                    imagesToDelete.forEach(imageName => {
                        const imagePath = path.join(__dirname, "../../../public/images/products/", imageName);
                        if (fs.existsSync(imagePath)) {
                            fs.unlinkSync(imagePath);
                        }
                    });
                    return db.Images.destroy({ where: { name: imagesToDelete } })
                        .then(() => {
                            // Crear nuevas asociaciones de imágenes en la base de datos
                            const imagesToCreate = req.files.map(img => img.filename).filter(name => !oldImages.includes(name));
                            return db.Images.bulkCreate(imagesToCreate.map(name => ({ name, id_product: +id })));
                        });
                } else {
                    return Promise.resolve();
                }
            }).then(() => {
                // Actualizar producto en el JSON
                const oldImagesJson = product.images.map(image => image.name);
                const newImagesJson = req.files.map(img => img.filename);

                // Categorías por nombre
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
                };

                // Talles y Colores
                const sizesArrayStoreJson = [talle1, talle2, talle3, talle4, talle5].filter(size => size !== undefined);
                const sizesArrayJson = sizesArrayStoreJson.map(Number);
                const colorsArrayStoreJson = [black, beige, blue, white, red, green, purple, orange, lightblue, gray, lavender, pink, silver, bluishGreen, gold].filter(color => color !== undefined);
                const colorsArrayJson = colorsArrayStoreJson.map(Number);

                // Edición del producto
                const newProduct = {
                    id: +id,
                    image: oldImagesJson.length > 0 ? oldImagesJson : newImagesJson,
                    name: name.trim(),
                    description: description.trim(),
                    featuredDescription: featuredDescription.trim(),
                    category: categoriesName[+category],
                    sizes: sizesArrayJson,
                    colors: colorsArrayJson,
                    price: +price,
                    new: neworsale === "new",
                    sale: neworsale === "sale",
                    available: !!available
                };

                // Reemplazar el producto antiguo con el nuevo en el archivo JSON
                products = products.map(product => (product.id === +id ? newProduct : product));
                saveData(products);

                // Redirigir a la lista de productos
                res.redirect("/admin/productos");
            });
        })
        .catch(error => {
            console.error('Error al actualizar el producto:', error);
            res.status(500).send('Error interno del servidor');
        });
};