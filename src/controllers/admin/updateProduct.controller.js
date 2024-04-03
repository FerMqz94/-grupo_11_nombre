const { loadData, saveData } = require('../../database');

module.exports = (req, res) => {
    let products = loadData();
    const colors = loadData('colors');
    const { id } = req.params;
    const { name, description, featuredDescription, category, price, talle1, talle2, talle3, talle4, talle5, black, beige, blue, white, red, green, purple, orange, lightblue, gray, lavender, pink, silver, bluishGreen, gold, neworsale, available } = req.body;
    const newID = products[products.length - 1].id + 1;
    let tallesSend = [];
    let sendColor = [];
    let newImages = [];

    // Función para procesar los colores
    const processColors = () => {
        const colorArray = [black, beige, blue, white, red, green, purple, orange, lightblue, gray, lavender, pink, silver, bluishGreen, gold];
        colorArray.forEach((color, index) => {
            if (color) {
                sendColor.push(colors[index].name);
            }
        });
    };

    // Función para procesar los talles
    const processTalles = () => {
        const talleArray = [talle1, talle2, talle3, talle4, talle5];
        tallesSend = talleArray.map(talle => !!talle);
    };

    // Procesar colores y talles
    processColors();
    processTalles();

    // Mapear nuevas imágenes
    if (req.files && req.files.length) {
        newImages = req.files.map(img => img.filename);
    }

    // Crear el nuevo producto
    const newProduct = {
        id: newID,
        image: newImages.length ? newImages : [],
        name: name.trim(),
        description: description.trim(),
        featuredDescription: featuredDescription.trim(),
        category: category?.trim(),
        sizes: tallesSend,
        colors: sendColor,
        price: +price,
        new: neworsale === "new",
        sale: neworsale === "sale",
        available: !!available
    };

    // Reemplazar el producto antiguo con el nuevo
    products = products.map(product => {
        if (product.id === +id) {
            return newProduct;
        }
        return product;
    });

    // Guardar los datos actualizados
    saveData(products);

    // Redirigir a la lista de productos
    res.redirect("/admin/productos");
};
