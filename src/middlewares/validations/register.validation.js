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


const { body } = require("express-validator");
const db = require("../../db/models");
// const regExPass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;



const fieldNameDefault = body("name")
    .notEmpty()
    .withMessage("nombre requerido")
    .bail()


const fieldUsernameDefault = body("username")
    .notEmpty()
    .withMessage("nombre de usuario requerido")
    .bail()
    .isLength({ min: 4 })
    .withMessage("debe al menos contener 4 letras")
    .isLength({ max: 20 })
    .withMessage("no puede superar las 20 letras")


const fieldEmailDefault = body("email")
    .notEmpty()
    .withMessage("Email requerido")
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


const fieldEmailRegister = fieldEmailDefault.custom((value, { req }) => {
    return  db.Users.findAll({
        where:{
          email: value,
        }})
.then(user=>{

    if (!user.length) {
        throw new Error("Revise que el usuario esté bien escrito");
      }
}) 

.catch((error) => {
throw error 
})

}
    
);

const fieldPasswordRegister = fieldPasswordDefault
    .isLength({ min: 8 })
    .withMessage("la contraseña al menos debe tener 8 letras")
    .isLength({ max: 16 })
    .withMessage("la contraseña al menos debe tener menos de 16 letras")
    .bail()
// .matches(regExPass)
// .withMessage("La contraseña es invalida");
const fieldPasswordConfirmRegister = fielPpasswordConfirmDefault

    .isLength({ min: 8 })
    .withMessage("la contraseña al menos debe tener 8 letras")
    .isLength({ max: 16 })
    .withMessage("la contraseña al menos debe tener menos de 16 letras")
    .bail();

const PasswordConfirm = fielPpasswordConfirmDefault.custom((value, { req }) => {

    return  db.Users.findOne({
        where: {
          email: req.body.email,
        }})
       .then(user=>{

    if (confirmPassword !== originalPassword) {
        throw new Error("las contraseñas no coiciden");
    }

    return true;
})
.catch((error) => {
    throw error 
    })
});




module.exports = {
    registerValidation:
    [fieldNameDefault,
    fieldUsernameDefault,
    fieldEmailRegister,
    fieldPasswordRegister,
    fielPpasswordConfirmDefault,
    fieldPasswordConfirmRegister,
    PasswordConfirm],
};



