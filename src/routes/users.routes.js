const express = require("express");
const router = express.Router();
const { perfilUsuario, updateUsers } = require("../controllers/users");




//  /users/perfil-usuario
router.get("/perfil-usuario/:id", perfilUsuario);
router.put("/perfil-usuario/:id", updateUsers);


module.exports = router;