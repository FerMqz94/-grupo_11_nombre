const express = require("express");
const router = express.Router();
const { cart } = require('../controllers/cart');
const { userLogin } = require("../middlewares/adnimValidation");
// const checkSession = require("../middlewares/checkSession");




router.get("/",userLogin, cart);//
router.get("/carrito", (req, res) => res.redirect("/"));


module.exports = router;