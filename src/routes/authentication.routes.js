const express = require("express");
const router = express.Router();
const authController = require("../controllers/authentication");

router.get("/iniciar", authController.login);
router.get("/registrar", authController.register);


module.exports = router;