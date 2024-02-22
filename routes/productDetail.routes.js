const express = require("express");
const router = express.Router();

const otherController = require("../controllers/other");

router.get("/productDetail", otherController.productDetail);

module.exports = router;