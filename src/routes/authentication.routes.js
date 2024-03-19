const express = require("express");
const router = express.Router();
const { login, register, processRegister, processLogin } = require("../controllers/authentication");


//  /autenticacion/iniciar
router.get("/iniciar", login);
router.post("/iniciar", processLogin);

//  /autenticacion/registrar
router.get("/registrar", register);
router.post("/registrar", processRegister);


module.exports = router;