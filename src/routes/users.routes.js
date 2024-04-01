const express = require("express");
const router = express.Router();
const { perfilUsuario } = require("../controllers/users");



//  /users/perfil-usuario
router.get("/perfil-usuario", perfilUsuario);


module.exports = router;