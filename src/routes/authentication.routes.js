const express = require("express");
const router = express.Router();
const { login, register, processRegister, processLogin, logout } = require("../controllers/authentication");
const {registerValidation} = require("../middlewares/validations/register.validation");
const { loginValidation } = require("../middlewares/validations/login.validation");


//  /autenticacion/iniciar
router.get("/iniciar", login);
router.post("/iniciar", loginValidation, processLogin);

//  /autenticacion/registrar
router.get("/registrar", register);
router.post("/registrar",  processRegister); //registerValidation,

router.get("/cerrar-sesion", logout)




module.exports = router;