// const { body } = require("express-validator");
// const { loadData } = require("../../database");
// // const regExPass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;



// const fieldNameDefault = body("name")
//     .notEmpty()
//     .withMessage("nombre requerido")
//     .bail()


// const fieldUsernameDefault = body("username")
//     .notEmpty()
//     .withMessage("nombre de usuario requerido")
//     .bail()
//     .isLength({ min: 4 })
//     .withMessage("debe al menos contener 4 letras")
//     .isLength({ max: 20 })
//     .withMessage("no puede superar las 20 letras")


// const fieldEmailDefault = body("email")
//     .notEmpty()
//     .withMessage("Email requerido")
//     .bail()
//     .isEmail()
//     .withMessage("Formato invalido")
//     .bail();

// const fieldPasswordDefault = body("password")
//     .notEmpty()
//     .withMessage("Campo requerido")
//     .bail();

// const fielPpasswordConfirmDefault = body("passwordConfirm")
//     .notEmpty()
//     .withMessage("Campo requerido")
//     .bail();


// const fieldEmailRegister = fieldEmailDefault.custom((value, { req }) => {
//     const users = loadData("users");
//     const existUser = users.find((u) => u.email === value.trim());

//     if (existUser) {
//         throw new Error("Ya existe un usuario registrado con ese email");
//     }

//     return true;
// });

// const fieldPasswordRegister = fieldPasswordDefault
//     .isLength({ min: 8 })
//     .withMessage("la contraseña al menos debe tener 8 letras")
//     .isLength({ max: 16 })
//     .withMessage("la contraseña al menos debe tener menos de 16 letras")
//     .bail()
// // .matches(regExPass)
// // .withMessage("La contraseña es invalida");
// const fieldPasswordConfirmRegister = fielPpasswordConfirmDefault

//     .isLength({ min: 8 })
//     .withMessage("la contraseña al menos debe tener 8 letras")
//     .isLength({ max: 16 })
//     .withMessage("la contraseña al menos debe tener menos de 16 letras")
//     .bail();

// const PasswordConfirm = fielPpasswordConfirmDefault.custom((value, { req }) => {

//     const originalPassword = req.body.password
//     const confirmPassword = req.body.passwordConfirm

//     if (confirmPassword !== originalPassword) {
//         throw new Error("las contraseñas no coiciden");
//     }

//     return true;
// });




// module.exports = {
//     registerValidation:
//     [fieldNameDefault,
//     fieldUsernameDefault,
//     fieldEmailRegister,
//     fieldPasswordRegister,
//     fielPpasswordConfirmDefault,
//     fieldPasswordConfirmRegister,
//     PasswordConfirm],
// };


// const { body } = require("express-validator");
// const db = require("../../db/models");
// const regExPass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;

// const {body} = require('express-validator');
// const  db = require('../database/models'); 


// module.exports = [
//     const validateForm = [
//     body('name').notEmpty().withMessage("El campo no puede estar vacío"),
    
//     body('username').notEmpty().withMessage("El campo no puede estar vacío"),
//     body("email")
//     .notEmpty()
//     .withMessage("El campo es requerido")
//     .bail()
//     .isEmail()
//     .withMessage("Formato incorrecto")
//     .bail()
//     // body('email').notEmpty().withMessage("El campo no puede estar vacío")
//     // .isEmail().withMessage('Debe ser un correo con formato válido')
//     // .isEmail().withMessage('Debe ser un correo con formato valido').bail()
//     .custom((value,{req} )=> { 
//         // console.log("esto es value",value)
//         console.log("esto es body",req.body.email);
//         return db.User.findOne({
//             where: {
//                 email: value
//             }
//         })
//         .then(user => {
//         // console.log("esto es user----",user)
//             if (user) {
//                 throw new Error('El email se encuentra registrado')
//             }
//         })
//         // .catch(() => {
//         //     throw new Error('El email se encuentra registrado')
//         // })
// }),



//     body('password').notEmpty().withMessage("El campo no puede estar vacio").bail()
//     .custom((value,{req})=> {
//         return value == req.body.passwordConfirm;
//     }).withMessage("Los password no coinciden"),



// ]

//  module.exports = {
//    registerValidation:
//     [ validateForm

//     ]

//  }

const { body } = require('express-validator');
const db = require('../../db/models');

const fieldNameDefault = body('name')
  .notEmpty().withMessage('Nombre requerido')
  .isLength({ min: 3 }).bail();

const fieldUsernameDefault = body('username')
  .notEmpty().withMessage('Nombre de usuario requerido')
  .isLength({ min: 4, max: 20 }).withMessage('Debe tener entre 4 y 20 caracteres')
  .bail();

const fieldEmailDefault = body('email')
  .notEmpty().withMessage('Email requerido')
  .isEmail().withMessage('Formato de email inválido')
  .bail();

const fieldEmailRegister = fieldEmailDefault.custom((value) => {
  return db.Users.findOne({
    where: {
      email: value,
    },
  })
    .then((user) => {
      if (user) {
        throw new Error('Ya existe un usuario registrado con ese email');
      }
    })
    .catch((err) => {
      console.error(err); // Log the error to the console or a logging system
      // Handle the error appropriately, such as sending an error response
    });
});

const fieldPasswordDefault = body('password')
  .notEmpty().withMessage('Contraseña requerida')
  .isLength({ min: 8, max: 16 }).withMessage('La contraseña debe tener entre 8 y 16 caracteres')
  .bail();

const fielPpasswordConfirmDefault = body('passwordConfirm')
  .notEmpty().withMessage('Confirme la contraseña')
  .isLength({ min: 8, max: 16 }).withMessage('La contraseña debe tener entre 8 y 16 caracteres')
  .bail();

// Add password complexity validation using a regular expression
const regExPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,16}$/;

const fieldPasswordRegister = fieldPasswordDefault
    .matches(regExPass).withMessage('La contraseña debe contener al menos una letra minúscula, una mayúscula, un número y un carácter especial')
    .bail();

const fieldPasswordConfirmRegister = fielPpasswordConfirmDefault
.matches(regExPass).withMessage('La contraseña debe contener al menos una letra minúscula, una mayúscula, un número y un carácter especial')
.bail();

const PasswordConfirm = fielPpasswordConfirmDefault.custom((value, { req }) => {
    return db.Users.findOne({
    where: {
        email: req.body.email,
    },
    })
    .then(() => {
        if (value !== req.body.password) {
        throw new Error('Las contraseñas no coinciden');
        }

        return true;
    })
    .catch((error) => {
        console.error(error); // Log the error to the console or a logging system
        // Handle the error appropriately, such as sending an error response
    });
    });

module.exports = {
    registerValidation: [
    fieldNameDefault,
    fieldUsernameDefault,
    fieldEmailRegister,
    fieldPasswordRegister,
    fielPpasswordConfirmDefault,
    fieldPasswordConfirmRegister,
    PasswordConfirm,
    ],
};


// const { body } = require('express-validator');
// const db = require("../../db/models");
// const validateForm = [
//   // Validación para 'name'
//   body('name')
//     .trim()
//     .notEmpty().withMessage('El campo nombre no puede estar vacío.')
//     .isLength({ min: 2 }).withMessage('El nombre debe tener al menos 2 caracteres.'),
  
//   // Validación para 'surname'
//   body('surname')
//     .trim()
//     .notEmpty().withMessage('El campo apellido no puede estar vacío.')
//     .isLength({ min: 2 }).withMessage('El apellido debe tener al menos 2 caracteres.'),
  
//   // Validación para 'email'
//   body('email')
//     .trim()
//     .isEmail().withMessage('Debe ser un correo electrónico válido.')
//     .custom(async email => {
//         const existUser = await db.Users.findOne({ where: { email } });
//       if (existUser) {
//                  throw new Error("Ya existe un usuario registrado con ese email");
//            }
//     }),
  
//   // Validación para 'password'
//   body('password')
//     .trim()
//     .isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres.'),
  
//   // Validación para 'repetir password'
//   body('repetir_password')
//     .trim()
//     .custom((value, { req }) => {
//       if (value !== req.body.password) {
//         throw new Error('Las contraseñas no coinciden.');
//       }
//       res.render("/")
//       return true;
//     })
// ];
//  module.exports = {
//    registerValidation:
// [validateForm,]

//  }