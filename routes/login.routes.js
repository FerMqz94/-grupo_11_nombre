const express = require("express");
const router = express.Router();

const otherController = require("../controllers/other");

router.get("/", otherController.login);

module.exports = router;