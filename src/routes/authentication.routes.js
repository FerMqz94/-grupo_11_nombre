const express = require("express");
const router = express.Router();
const { login, register, processRegister, processLogin, logout, loginAndRegisterGoogle } = require("../controllers/authentication");
const {registerValidation} = require("../middlewares/validations/register.validation");
const { loginValidation } = require("../middlewares/validations/login.validation");


const { route } = require("./other.routes");

const passport = require("passport");

//  /autenticacion/iniciar
router.get("/iniciar", login);
router.post("/iniciar", loginValidation, processLogin);

//  /autenticacion/registrar
router.get("/registrar", register);
router.post("/registrar",registerValidation,  processRegister); //

router.get("/cerrar-sesion", logout)

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

// PARA INICIAR SESION CON GOOGLE

router.get("/iniciar/google", passport.authenticate("google"));

router.get("/google/callback", passport.authenticate("google", { failureRedirect: "/autenticacion/iniciar" }), loginAndRegisterGoogle);





module.exports = router;