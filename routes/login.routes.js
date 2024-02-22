const express = require("express");
const router = express.Router();

const otherController = require("../controllers/other");

router.get("/login", otherController.login);

module.exports = router;