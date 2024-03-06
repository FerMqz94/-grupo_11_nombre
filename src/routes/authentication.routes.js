const express = require("express");
const router = express.Router();
const { login, register } = require("../controllers/authentication");

router.get("/iniciar", login);
router.get("/registrar", register);


module.exports = router;