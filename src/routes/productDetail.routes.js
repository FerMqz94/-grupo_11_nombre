const express = require("express");
const router = express.Router();

const { productDetail } = require("../controllers/products");

router.get("/", productDetail);

module.exports = router;