const express = require("express");
const router = express.Router();
const { cart } = require('../controllers/cart');

router.get("/", cart);
router.get("/carrito", (req, res) => res.redirect("/"));

module.exports = router;