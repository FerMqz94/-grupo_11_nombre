// const { body } = require("express-validator");
// const { loadData } = require("../../database");

// const fieldNameDefault = body("name")
//     .notEmpty()
//     .withMessage("Nombre requerido")
//     .bail();

// const fieldUsernameDefault = body("username")
//     .notEmpty()
//     .withMessage("Nombre de usuario requerido")
//     .bail()
//     .isLength({ min: 4 })
//     .withMessage("Debe contener al menos 4 caracteres")
//     .isLength({ max: 20 })
//     .withMessage("No puede tener más de 20 caracteres");

// const fieldEmailDefault = body("email")
//     .notEmpty()
//     .withMessage("Email requerido")
//     .bail()
//     .isEmail()
//     .withMessage("Formato de email inválido").bail();

// const fieldPasswordDefault = body("password")
//     .optional()
//     .notEmpty()
//     .withMessage("Campo requerido")
//     .bail();

// const fieldPasswordConfirmDefault = body("passwordConfirm")
//     .optional()
//     .notEmpty()
//     .withMessage("Campo requerido")
//     .bail();

// const fieldEmailRegister = fieldEmailDefault.custom((value, { req }) => {
//   const users = loadData("users");
//   const existUser = users.find((u) => u.email === value.trim());

//   if (existUser) {
//     throw new Error("Ya existe un usuario registrado con ese email");
//   }

//   return true;
// });

// const fieldPasswordRegister = fieldPasswordDefault
//     .isLength({ min: 8 })
//     .withMessage("La contraseña debe tener al menos 8 caracteres")
//     .isLength({ max: 16 })
//     .withMessage("La contraseña no debe tener más de 16 caracteres")
//     .bail()
//     .optional();

// const fieldPasswordConfirmRegister = fieldPasswordConfirmDefault
//     .isLength({ min: 8 })
//     .withMessage("La contraseña debe tener al menos 8 caracteres")
//     .isLength({ max: 16 })
//     .withMessage("La contraseña no debe tener más de 16 caracteres")
//     .bail()
//     .optional();

// const PasswordConfirm = fieldPasswordConfirmDefault.custom((value, { req }) => {
//   const originalPassword = req.body.password;
//   const confirmPassword = req.body.passwordConfirm;

//   if (confirmPassword !== originalPassword) {
//     throw new Error("Las contraseñas no coinciden");
//   }

//   return true;
// });

// module.exports = {
//   updateUsersValidation: [
//     fieldNameDefault,
//     fieldUsernameDefault,
//     fieldEmailRegister,
//     fieldPasswordRegister,
//     fieldPasswordConfirmRegister,
//     PasswordConfirm,
//   ],
// };


const { body } = require('express-validator');
const db = require('../../db/models');

const fieldNameDefault = body("name")
    .notEmpty()
    .withMessage("Nombre requerido")
    .bail();

const fieldUsernameDefault = body("username")
    .notEmpty()
    .withMessage("Nombre de usuario requerido")
    .bail()
    .isLength({ min: 4 })
    .withMessage("Debe contener al menos 4 caracteres")
    .isLength({ max: 20 })
    .withMessage("No puede tener más de 20 caracteres");

const fieldEmailDefault = body("email")
    .notEmpty()
    .withMessage("Email requerido")
    .bail()
    .isEmail()
    .withMessage("Formato de email inválido").bail();

    // userSession = (req) => { db.Users.findByPk(req.params.id)}

    const fieldEmailRegister = fieldEmailDefault.custom((value) => {
      return db.Users.findOne({
        where: {
          email: value,
        },
      })
      //  && user.id !== userSession.id

        .then((user) => {
          if (user) {
            throw new Error('Ya existe un usuario registrado con ese email');
          }
        })
        .catch((err) => {
          console.error(err); 
        });
    });

const fieldPasswordDefault = body("password")
    .optional()
    .notEmpty()
    .withMessage("Campo requerido")
    .bail();

const fieldPasswordConfirmDefault = body("passwordConfirm")
    .optional()
    .notEmpty()
    .withMessage("Campo requerido")
    .bail();





const fieldPasswordRegister = fieldPasswordDefault
    .isLength({ min: 8 })
    .withMessage("La contraseña debe tener al menos 8 caracteres")
    .isLength({ max: 16 })
    .withMessage("La contraseña no debe tener más de 16 caracteres")
    .bail()
    .optional();

const fieldPasswordConfirmRegister = fieldPasswordConfirmDefault
    .isLength({ min: 8 })
    .withMessage("La contraseña debe tener al menos 8 caracteres")
    .isLength({ max: 16 })
    .withMessage("La contraseña no debe tener más de 16 caracteres")
    .bail()
    .optional();

const PasswordConfirm = fieldPasswordConfirmDefault.custom((value, { req }) => {
  const originalPassword = req.body.password;
  const confirmPassword = req.body.passwordConfirm;

  if (confirmPassword !== originalPassword) {
    throw new Error("Las contraseñas no coinciden");
  }

  return true;
});

module.exports = {
  updateUsersValidation: [
    fieldNameDefault,
    fieldUsernameDefault,
    fieldEmailRegister,
    fieldPasswordRegister,
    fieldPasswordConfirmRegister,
    PasswordConfirm,
  ],
};