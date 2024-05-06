const db = require('../../db/models');
const fs = require('fs');

module.exports = (req, res) => {
    const { id } = req.params;

    // Verificar si el producto existe en la base de datos
    db.Product.findByPk(id, { include: [db.Images, db.Products_Sizes, db.Products_Colors] })
        .then(product => {
            if (!product) {
                console.error('El producto no se encontró');
                return res.status(404).send('El producto no se encontró');
            }

            // Obtener datos del formulario
            const { name, description, featuredDescription, category, price, talle1, talle2, talle3, talle4, talle5, black, beige, blue, white, red, green, purple, orange, lightblue, gray, lavender, pink, silver, bluishGreen, gold, neworsale, available } = req.body;

            // Actualizar el producto en la base de datos
            db.Product.update({
                name: name.trim(),
                description: description.trim(),
                featuredDescription: featuredDescription.trim(),
                category: +category,
                price: +price,
                new: neworsale === "new",
                sale: neworsale === "sale",
                available: !!available
            }, {
                where: { id: +id }
            })
                .then(() => {
                    // Actualizar las asociaciones de tallas
                    const sizesArray = [talle1, talle2, talle3, talle4, talle5].filter(size => !!size);
                    if (sizesArray.length) {
                        const existingSizes = product.Products_Sizes.map(ps => ps.id_size);
                        const sizesToUpdate = sizesArray.filter(size => !existingSizes.includes(+size));
                        if (sizesToUpdate.length) {
                            db.Products_Sizes.bulkCreate(sizesToUpdate.map(size => ({
                                id_product: +id,
                                id_size: +size
                            })));
                        }
                    }

                    // Actualizar las asociaciones de colores
                    const colorsArray = [black, beige, blue, white, red, green, purple, orange, lightblue, gray, lavender, pink, silver, bluishGreen, gold].filter(color => !!color);
                    if (colorsArray.length) {
                        const existingColors = product.Products_Colors.map(pc => pc.id_color);
                        const colorsToUpdate = colorsArray.filter(color => !existingColors.includes(+color));
                        if (colorsToUpdate.length) {
                            db.Products_Colors.bulkCreate(colorsToUpdate.map(color => ({
                                id_product: +id,
                                id_color: +color
                            })));
                        }
                    }

                    // Manejar las imágenes
                    let newImages = [];
                    if (req.files.length) {
                        // Si hay nuevas imágenes, mapear el req.files para obtener los nombres de archivo y asignarlos a newImages
                        newImages = req.files.map(img => img.filename);

                        // Eliminar imágenes anteriores que ya no están presentes en las nuevas imágenes
                        const oldImages = product.Images.map(image => image.name);
                        oldImages.forEach(async oldImage => {
                            // Verificar si las imágenes antiguas no están presentes en las nuevas imágenes
                            if (!newImages.includes(oldImage)) {
                                const path = `./public/images/products/${oldImage}`;
                                // Eliminar imágenes del sistema de archivos
                                fs.unlinkSync(path); // Eliminar la imagen del directorio de uploads
                                // Eliminar la imagen de la base de datos
                                db.Image.destroy({ where: { name: oldImage } });
                            }
                        });
                    } else {
                        // Si no se cargan nuevas imágenes, conservar las imágenes existentes del producto
                        newImages = product.Images.map(image => image.name);
                    }

                    // Crear nuevas asociaciones de imágenes en la base de datos
                    if (newImages.length) {
                        db.Image.bulkCreate(newImages.map(name => ({
                            name,
                            id_product: +id
                        })));
                    }

                    // Redirigir a la lista de productos
                    res.redirect("/admin/productos");
                })
                .catch(error => {
                    console.error('Error al actualizar el producto:', error);
                    res.status(500).send('Error interno del servidor');
                });
        })
        .catch(error => {
            console.error('Error al buscar el producto:', error);
            res.status(500).send('Error interno del servidor');
        });
};