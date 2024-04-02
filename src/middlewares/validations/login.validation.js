const { body } = require("express-validator");
const { loadData } = require("../../database");
const bcrypt = require('bcryptjs');
//const { password } = req.body

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

const fieldEmailLogin = fieldDefaultEmail.custom((value, { req }) => {
        const users = loadData("users");
        const existUser = users.find((u) => u.email === value.trim());
    
        if (!existUser) {
            throw new Error("Revise que el usuario esté bien escrito");
        }
    
        return true;
});


const fieldPasswordLogin = fieldDefaultPassword.custom((value, { req }) => {
        const users = loadData("users");
        const userFind = users.find((u) => u.email === req.body.email.trim());
    
        const isPasswordValid = bcrypt.compareSync(req.body.password, userFind.password);

        if (!isPasswordValid) { 
            throw new Error('Contraseña inválida')
            
        }
        return true;
});


module.exports = {
    loginValidation: [ fieldEmailLogin, fieldPasswordLogin ]
}
