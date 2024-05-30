const express = require("express");
const router = express.Router();
const { perfilUsuario, updateUsers } = require("../controllers/users");
const { updateUsersValidation } = require("../middlewares/validations/users.validation");
const { userDelete } = require("../controllers/authentication");

// router.use((req, res, next) => {
//     res.locals.userLogin = req.session.user || null;
//     next();
// });

//  /users/perfil-usuario
router.get("/perfil-usuario/:id", perfilUsuario);
router.put("/perfil-usuario/:id",updateUsersValidation, updateUsers) 
router.post("/eliminar-usuario/:id", userDelete)

module.exports = router;