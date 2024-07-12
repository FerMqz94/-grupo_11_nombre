const express = require("express");
const router = express.Router();
const { login, register, processRegister, processLogin, logout, loginAndRegisterGoogle, loginAndRegisterTwitter, loginAndRegisterFacebook } = require("../controllers/authentication");
const { registerValidation } = require("../middlewares/validations/register.validation");
const { loginValidation } = require("../middlewares/validations/login.validation");


const { route } = require("./other.routes");

const passport = require("passport");

//  /autenticacion/iniciar
router.get("/iniciar", login);
router.post("/iniciar", loginValidation, processLogin);

//  /autenticacion/registrar
router.get("/registrar", register);
router.post("/registrar", registerValidation, processRegister); //

router.get("/cerrar-sesion", logout)

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

// PARA INICIAR SESION CON GOOGLE

router.get("/iniciar/google", passport.authenticate("google"));

router.get("/google/callback", passport.authenticate("google", { failureRedirect: "/autenticacion/iniciar" }), loginAndRegisterGoogle);

// FUNCIONARA PROXIMAMENTE
// PARA INICIAR SESION CON TWITTER O PARA LOS JOVENES X
/**/
router.get('/iniciar/twitter',passport.authenticate('twitter'));

router.get('/twitter/callback', passport.authenticate('twitter', { failureRedirect: '/autenticacion/iniciar' }), loginAndRegisterTwitter);

// PARA INICIAR SESION CON FACEBOOK O PARA LOS JOVENES META 

router.get('/iniciar/facebook',passport.authenticate('facebook'));

router.get('/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/autenticacion/iniciar' }), loginAndRegisterFacebook);



module.exports = router;