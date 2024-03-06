const express = require("express");
const router = express.Router();
const { createProduct, editProduct, listProducts} = require("../controllers/admin");

// "/admin"
router.get("/productos", listProducts); 
router.get('/crear-productos', createProduct);
router.get('/editar-productos', editProduct);

module.exports = router;