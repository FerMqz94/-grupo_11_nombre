const express = require("express");
const router = express.Router();
const { perfilUsuario } = require("../controllers/users");



//  /users/perfil-usuario
router.get("/perfil-usuario/:id", perfilUsuario);


module.exports = router;