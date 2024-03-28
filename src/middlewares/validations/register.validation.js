const { body } = require("express-validator");
const { loadData } = require("../../database");
const regExPass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;



const fieldNameDefault = body("name")
    .notEmpty()
    .withMessage("Campo requerido")
    .bail()
    // .isName()
    // .withMessage("nombre invalido")
    // .bail();

const fieldUsernameDefault = body("username")
    .notEmpty()
    .withMessage("Campo requerido")
    .bail()
    // .isName()
    // .withMessage("nombre de usuario invalido")
    // .bail();

const fieldEmailDefault = body("email")
    .notEmpty()
    .withMessage("Campo requerido")
    .bail()
    .isEmail()
    .withMessage("Formato invalido")
    .bail();

const fieldPasswordDefault = body("password")
    .notEmpty()
    .withMessage("Campo requerido")
    .bail();

const fielPpasswordConfirmDefault = body("passwordConfirm")
    .notEmpty()
    .withMessage("Campo requerido")
    .bail();
    // custom((value, { req }) => {
    //     if (value !== req.body.password) {
    //         throw new Error('Las contraseñas no coinciden');
    //     }
    //     return true;
    // }) 

const fieldEmailRegister = fieldEmailDefault.custom((value, { req }) => {
    const users = loadData("users");
    const existUser = users.find((u) => u.email === value.trim());

    if (existUser) {
        throw new Error("Ya existe un usuario registrado con ese email");
    }

    return true;
});

const fieldPasswordRegister = fieldPasswordDefault
    .isLength({ min: 8, max: 16 })
    .withMessage("Longitud invalida")
    .bail()
    .matches(regExPass)
    .withMessage("La contraseña es invalida");

const fieldEmailLogin = fieldEmailDefault.custom((value, { req }) => { });

const fieldPasswordLogin = fieldPasswordDefault.custom((value, { req }) => { });

module.exports = {
    registerValidation: [fieldNameDefault,fieldUsernameDefault, fieldEmailRegister, fieldPasswordRegister, fielPpasswordConfirmDefault],
};
