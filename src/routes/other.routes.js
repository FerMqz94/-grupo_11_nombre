const express = require("express");
const router = express.Router();

<<<<<<< HEAD
const { home, search, aboutUs } = require("../controllers/other");
=======
const { home, search, List } = require("../controllers/other");
>>>>>>> 3d276f3e6ab069ff723ff4adec402278911584ed

router.get("/", home);
// router.get("/home", (req, res) => res.redirect("/"));
router.get("/resultados", search);
<<<<<<< HEAD

router.get("/sobre-nosotros", aboutUs);

=======
>>>>>>> 3d276f3e6ab069ff723ff4adec402278911584ed
module.exports = router;
