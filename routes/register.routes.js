const express = require("express");
const router = express.Router();

const otherController = require("../controllers/other");

router.get("/register", otherController.register);

module.exports = router;