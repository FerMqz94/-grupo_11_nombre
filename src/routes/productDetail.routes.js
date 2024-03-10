const express = require("express");
const router = express.Router();

const { productDetail } = require("../controllers/products");

router.get("/:id", productDetail);

module.exports = router;