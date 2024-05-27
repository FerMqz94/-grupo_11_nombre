const express = require("express");
const router = express.Router();

const { list} = require("../controllers/products");

router.get("/productos", list); 
module.exports = router;