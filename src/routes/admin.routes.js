const express = require("express");
const router = express.Router();
const { createProduct, editProduct, listProducts, deleteProduct, removeProduct} = require("../controllers/admin");

// "/admin"
router.get("/productos", listProducts); 
router.get('/crear-productos', createProduct);
router.get('/editar-productos', editProduct);
router.get('/eliminar-producto/:id', deleteProduct);
router.delete('/eliminar-producto/:id', removeProduct);
router.get('/eliminar-producto/:id', deleteProduct);
router.delete('/eliminar-producto/:id', removeProduct)

module.exports = router;