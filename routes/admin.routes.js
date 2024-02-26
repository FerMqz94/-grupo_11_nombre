const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin");

// "/admin"
router.get("/productos", adminController.listProducts); 
router.get('/crear-productos', adminController.createProduct);
router.get('/editar-productos', adminController.editProduct);

module.exports = router;