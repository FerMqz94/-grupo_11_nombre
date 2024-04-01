const express = require("express");
const router = express.Router();
const { login, register, processRegister, processLogin } = require("../controllers/authentication");
const {registerValidation} = require("../middlewares/validations/register.validation");


//  /autenticacion/iniciar
router.get("/iniciar", login);
router.post("/iniciar", processLogin);

//  /autenticacion/registrar
router.get("/registrar", register);
router.post("/registrar", registerValidation, processRegister);



module.exports = router;