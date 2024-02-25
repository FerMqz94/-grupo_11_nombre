const express = require("express");
const router = express.Router();

const otherController = require("../controllers/other");

router.get("/", otherController.cart);
router.get("/carrito", (req, res) => res.redirect("/"));

module.exports = router;