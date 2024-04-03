const express = require("express");
const router = express.Router();
const { perfilUsuario, updateUsers } = require("../controllers/users");
const { updateUsersValidation } = require("../middlewares/validations");




//  /users/perfil-usuario
router.get("/perfil-usuario/:id", perfilUsuario);
router.put("/perfil-usuario/:id", updateUsers) //updateUsersValidation) No funciona la validación, no se encuentra la razón del error


module.exports = router;