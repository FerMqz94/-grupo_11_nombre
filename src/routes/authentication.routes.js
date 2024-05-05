const express = require("express");
const router = express.Router();
const { login, register, processRegister, processLogin, logout, userDelete } = require("../controllers/authentication");
const {registerValidation} = require("../middlewares/validations/register.validation");
const { loginValidation } = require("../middlewares/validations/login.validation");


//  /autenticacion/iniciar
router.get("/iniciar", login);
router.post("/iniciar", loginValidation, processLogin);

//  /autenticacion/registrar
router.get("/registrar", register);
router.post("/registrar", registerValidation, processRegister);

router.get("/cerrar-sesion", logout)

// router.get("/eliminar" , userDelete)


module.exports = router;