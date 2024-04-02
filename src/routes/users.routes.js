const express = require("express");
const router = express.Router();
const { perfilUsuario } = require("../controllers/users");
const { updateUsers } = require('../controllers/users/updateUsers.controller')



//  /users/perfil-usuario
router.get("/perfil-usuario/:id", perfilUsuario);
/*router.put("/perfil-usuario/:id", updateUsers);*/


module.exports = router;