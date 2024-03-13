const { loadData, saveData } = require('../../database');
const path = require('path');
const fs = require('fs');
const colorsFile = require('../../database');

//TRAIGO Y LEO LA INFORMACIÓN DE COLORS.JSON
const loadDataColors = (filename = "colors") => {
const pathJSONColors = path.join(__dirname, `../../database/${filename}.json`);
const dataJSONColors = fs.readFileSync(pathJSONColors, 'utf-8');
const dataJSColors = JSON.parse(dataJSONColors); 
return dataJSColors   
}

module.exports = (req, res) => {

    //VARIABLES Y CONSTANTES PARA OPERAR CON LOS DATOS
    let products = loadData();
    let colors = loadDataColors();
    const { name, description, featuredDescription, category, price, talle1, talle2, talle3, talle4, talle5, black, beige, blue, white, red, green, purple, orange, lightblue, gray, lavender, pink, silver, bluishGreen, gold, neworsale, available } = req.body;
    const newID = products[products.length -1].id + 1;
    let talleBooleano;
    let tallesSend = [];
    let colorsName;
    let sendColor = []
    let colorArrayBoolean = [];
    let colorBoolean;

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

    // FUNCIÓN PARA GENERAR UN ARRAY CON LOS NOMBRES QUE VIENEN COMO TRUE, LOS DEMÁS SON DESCARTADOS - SE EJECUTA GRACIAS A LA INFORMACIÓN QUE SE OBTIENE DESDE EL COLORS.JSON 
    const storeColors = (colorArrayBoolean, colors) => {

       for( let i = 0; i < colors.length; i++){
        if(colorArrayBoolean[i]){
            colorsName = colors[i].name;
            sendColor.push(colorsName);     
        } 
       }
       return sendColor;
    }

    //EJECUCIÓN DE LA FUNCIÓN 
    storeColors(colorArrayBoolean, colors);
    
    ///// FUNCIÓN PARA TALLES////

    const storeTalles = (talle, tallesSend) => {
        talleBooleano = !!talle;
        return tallesSend.push(talleBooleano);
    }

    // EJECUCIÓN
    storeTalles(talle1, tallesSend);
    storeTalles(talle2, tallesSend)
    storeTalles(talle3, tallesSend);
    storeTalles(talle4, tallesSend);
    storeTalles(talle5, tallesSend);


    const newProduct = {
       id: newID,
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
 
    }

    products = [...products, newProduct];
    saveData(products);

    res.redirect("/admin/productos");
}