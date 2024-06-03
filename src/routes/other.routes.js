const express = require("express");
const router = express.Router();

const { home, search, aboutUs, contactUs } = require("../controllers/other");

router.get("/", home);

// router.get("/home", (req, res) => res.redirect("/"));

router.get("/resultados", search);

router.get("/sobre-nosotros", aboutUs);

router.get("/contacto", contactUs);

module.exports = router;
