const express = require("express");
const router = express.Router();

const { home, search, List } = require("../controllers/other");

router.get("/", home);
// router.get("/home", (req, res) => res.redirect("/"));
router.get("/resultados", search);
module.exports = router;
