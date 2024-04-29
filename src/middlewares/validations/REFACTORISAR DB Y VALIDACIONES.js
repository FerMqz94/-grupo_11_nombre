// crear producto 

// const db = require("../../db/models");
// module.exports = (req,res) => {
//     res.render("./admin/createProduct", {}, (err,content) => {
//       err && res.send(err.mesage)
//       res.render('partials/dashboard', {
//         contentView:content
//       })
//     })
//   }


// delete producto

// const db = require("../../db/models");
// module.exports = (req,res) => {
//     const {id, name} = req.query;
    
//     res.render('admin/deleteProduct', {id, name}, (err, contentView) => {
//         err && res.send(err.message)
//         res.render('partials/dashboard', { contentView })
//     });
// };


// destroy productos

// const db = require("../../db/models");
// const path = require("path")
// const fs = require("fs")
// module.exports = (req,res) => {
//   const {id} = req.params
//   const products = products.db

//   const productsLessOne = products.filter(p => p.id !== +id)
//   const productDestroy = products.find(p => p.id === +id)

//   const pathFile = path.join(__dirname,"../../../public/images/products/" + productDestroy.image)
//   const existFile = fs.existsSync(pathFile)
//   if(existFile) {
//     fs.unlinkSync(pathFile)
//   }
//   db.products(productsLessOne)

//   res.redirect("/admin/productos")
// }


// editar producto
// const { validationResult } = require("express-validator");
// const db = require("../../db/models");

// module.exports = (req,res) => {
    // const errors = validationResult(req);
//     const products = products.db
//     const { id } = req.params;
//     const product = products.find((p) => p.id === +id)

//     res.render("./admin/editProduct", {
//       product
//     }, (err,content) => {
//       err && res.send(err.mesage)
//       res.render('partials/dashboard', {
//         contentView:content
//       })
//     })
//   }


// lista de producto

// const db = require("../../db/models");

// module.exports = (req, res) => {
//   db.product.findAll({
//     include:[
//     {
//         association:"imagenes"
//         },
//     {
//         association:"color" 
//     },
//     {
//         association:"Sizes"
//     }
//     ],
// })
// .then((products)=>{
    //     res.render("admin/listProducts", { 
    //         products
    //        }, (err, content) => {
    
        //         err && res.send(err.message)
        //         res.render("partials/dashboard", {
        //           contentView: content
        //          })
// })

    
//     })};


// remover producto

// const db = require("../../db/models");

// module.exports = (req,res) => {
//     const {id} = req.params

//     const products = products.db

//     const productLessOne = products.filter(p => p.id !== +id)

//   db.products(productsLessOne)

//     res.redirect("/admin/productos")
// };


// store producto 


// const db = require("../../db/models");


// module.exports = (req, res) => {
//     db.product.findAll();
//     const { name, description, featuredDescription, category, price,neworsale, available } = req.body;
//     const { validationResult } = require("express-validator");
//     const newID = products[products.length -1].id + 1;
//     if(req.files.length){
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
//    db.products(products);

//     res.redirect("/admin/productos");
// }
//     //VARIABLES Y CONSTANTES PARA OPERAR CON LOS DATOS
//     let products = loadData();
//     let colors = loadData('colors');
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
// }




// processLogin

// const db = require("../../db/models");
// const bcrypt = require("bcryptjs");
// const { validationResult } = require("express-validator");

// module.exports = (req, res) => {
//     const { email, password, remember } = req.body


//     db.User.findOne({
//       where: {
//         email,
//       },
//       include:["role"]
//     }).then((user) => { 
//       if (!user) res.send("El usuario no existe");
  
//       const isPasswordValid = bcrypt.compareSync(password, user?.password);
  
//       if (!isPasswordValid) res.send("El password es incorrecto");
  
//       req.session.userLogin = {
//         id: user.id,
//         name: user.name,
//         surname: user.surname,
//         avatar: user.avatar,
//         role: user.role.name,
//       };
  
//       if (recordame)
//         res.cookie("userLogin", req.session.userLogin, { maxAge: 6000 * 30 });
  
//       res.redirect("/");
//     });
//   };


// REGITRO 


// const db = require("../../db/models");

// module.exports = (req, res) => {
// const { name, surname, email, password } = req.body;


// db.user.create({
//     name: name ? name.trim() : null,
//     surname: surname ? surname.trim() : null,
//     email: email ? email.trim() : null,
//     password: password ? bcrypt.hashSync(password.trim()) : null,
//     }).then((user) => {


//     res.redirect("/");

//     })

// }

// VALIDACION DE LOGIN 


// const { body } = require("express-validator");
// const bcrypt = require('bcryptjs');
// const db = require("../../db/models");


// const fieldDefaultEmail = body("email")
//     .notEmpty()
//     .withMessage("El campo es requerido")
//     .bail()
//     .isEmail()
//     .withMessage("Formato incorrecto")
//     .bail();

// const fieldDefaultPassword = body("password")
//     .notEmpty()
//     .withMessage("El campo es requerido")
//     .bail()

// const fieldEmailLogin = fieldDefaultEmail.custom((value, { req }) => {
//         const users = loadData("users");
//         const existUser = users.find((u) => u.email === value.trim());
    
//         if (!existUser) {
//             throw new Error("Revise que el usuario esté bien escrito");
//         }
    
//         return true;
// });


// const fieldPasswordLogin = fieldDefaultPassword.custom((value, { req }) => {
//         const users = loadData("users");
//         const userFind = users.find((u) => u.email === req.body.email.trim());
    
//         const isPasswordValid = bcrypt.compareSync(req.body.password, userFind.password);

//         if (!isPasswordValid) { 
//             throw new Error('Contraseña inválida')
            
//         }
//         return true;
// });


// module.exports = {
//     loginValidation: [ fieldEmailLogin, fieldPasswordLogin ]
// }









