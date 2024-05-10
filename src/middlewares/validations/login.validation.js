// const { body } = require("express-validator");
// const { loadData } = require("../../database");
// const bcrypt = require('bcryptjs');


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
//       }
    
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


const { body } = require("express-validator");

const bcrypt = require('bcryptjs');
const db = require("../../db/models");

const fieldDefaultEmail = body("email")
    .notEmpty()
    .withMessage("El campo es requerido")
    .bail()
    .isEmail()
    .withMessage("Formato incorrecto")
    .bail();

const fieldDefaultPassword = body("password")
    .notEmpty()
    .withMessage("El campo es requerido")
    .bail()

const fieldEmailLogin = fieldDefaultEmail.custom(async (value) => {
    try {
        const user = await db.Users.findAll({
            where:{
                email: value,
            }
        });
        
        if (!user.length) {
            throw new Error("Revise que el usuario esté bien escrito");
        }
    } catch (error) {
        throw error;
    }
});

const fieldPasswordLogin = fieldDefaultPassword.custom(async (value, { req }) => {
    try {
        const user = await db.Users.findOne({
            where: {
                email: req.body.email,
            }
        });

        if (!user) {
            throw new Error('Usuario no encontrado');
        }

        const isPasswordValid = bcrypt.compareSync(value, user.password);
        if (!isPasswordValid) {
            throw new Error('Contraseña inválida');
        }

        return true;
    } catch (error) {
        throw error;
    }
});

module.exports = {
    loginValidation: [fieldEmailLogin, fieldPasswordLogin]
};



// const { body } = require('express-validator');
// const bcrypt = require('bcryptjs');
// const db = require("../database/models")


// module.exports = [
//     body('email').notEmpty().withMessage("El campo no puede estar vacio").bail()
//         .isEmail().withMessage("Formato incorrecto, revise escritura.").bail()
//         .custom(value => {
//             return db.User.findOne({
//                 where: { email: value }
//             }).then(user => {
//                 if (!user) {
//                     return Promise.reject(' ')
//                 }
//             }).catch(() => {
//                 return Promise.reject(' ')
//             })
//         }),

//     body('password').notEmpty().withMessage("El campo no puede estar vacio").bail()
//         .custom((value, { req }) => {
//             return db.User.findOne({
//                 where: { email: req.body.email }
//             }).then(user => {
//                 if (!bcrypt.compareSync(value, user.dataValues.password)) {
//                     return Promise.reject(' ')
//                 }
//             }).catch(() => {
//                 return Promise.reject(' ')
//             })
// })
// ];
