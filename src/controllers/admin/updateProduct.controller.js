const { loadData, saveData } = require("../../database");

module.exports = (req, res) => {
    const { id } = req.params;
    const { name, description, featuredDescription, category, price, talle1, talle2, talle3, talle4, talle5, black, beige, blue, white, red, green, purple, orange, lightblue, gray, lavender, pink, silver, bluishGreen, gold, neworsale, available } = req.body;
    const image = req.file;
    const products = loadData()
    const colorsData = loadData('colors')
    const productMapped = products.map(p => {
        if(p.id === +id) {
            let sizeBoolean;
            let sizesEdited = [];
            let colorBoolean;
            let colorsEditedBoolean = [];
            let colorsName;
            let colorsEdited = []
            let newImages = [];

            if(req.files.length){
                newImages = req.files.map(img => img.filename);
            }

            const editSizes = (size, sizesEdited) => {
                sizeBoolean = !!size;
                return sizesEdited.push(sizeBoolean);
            }
            editSizes(talle1, sizesEdited)
            editSizes(talle2, sizesEdited)
            editSizes(talle3, sizesEdited)
            editSizes(talle4, sizesEdited)
            editSizes(talle5, sizesEdited)

            const editColorsBoolean = (color, colorsEditedBoolean) => {
                colorBoolean = !!color;
                return colorsEditedBoolean.push(colorBoolean);
            }

            editColorsBoolean(black, colorsEditedBoolean)
            editColorsBoolean(beige, colorsEditedBoolean)
            editColorsBoolean(blue, colorsEditedBoolean)
            editColorsBoolean(white, colorsEditedBoolean)
            editColorsBoolean(red, colorsEditedBoolean)
            editColorsBoolean(green, colorsEditedBoolean)
            editColorsBoolean(purple, colorsEditedBoolean)
            editColorsBoolean(orange, colorsEditedBoolean)
            editColorsBoolean(lightblue, colorsEditedBoolean)
            editColorsBoolean(gray, colorsEditedBoolean)
            editColorsBoolean(lavender, colorsEditedBoolean)
            editColorsBoolean(pink, colorsEditedBoolean)
            editColorsBoolean(silver, colorsEditedBoolean)
            editColorsBoolean(bluishGreen, colorsEditedBoolean)
            editColorsBoolean(gold, colorsEditedBoolean)

            const editColors = (colorsEditedBoolean, colorsData) => {
                for (let i = 0; i < colorsData.length; i++) {
                    if (colorsEditedBoolean[i]) {
                        colorsName = colorsData[i].name;
                        colorsEdited.push(colorsName)
                    }
                }
                return colorsEdited
            }

            editColors(colorsEditedBoolean, colorsData)

            const productUpdate = {
                ...p,
                name: name.trim(),
                description: description.trim(),
                featuredDescription: featuredDescription.trim(),
                category: category?.trim(),
                sizes: sizesEdited,
                colors: colorsEdited,
                price: +price,
                new: neworsale === "new",
                sale: neworsale === "sale",
                available: !!available,
                image: newImages.length ? newImages : p.image
            };
            if(image?.filename) {
                const pathBeforeFile = path.join(__dirname, "../../../public/images/products/" + p.image);
                const existFile = fs.existsSync(pathBeforeFile);
                if(existFile) {
                    fs.unlinkSync(pathBeforeFile);
                }
            }
            return productUpdate
        }
        return p
    });
    saveData(productMapped);
    res.redirect("/admin/productos");
}
