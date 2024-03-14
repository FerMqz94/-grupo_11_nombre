const express = require("express");
const router = express.Router();
const { createProduct, storeProduct, editProduct, updateProduct, listProducts, deleteProduct, destroyProduct } = require("../controllers/admin");
const { uploadProducts } = require("../middlewares/uploads");

// "/admin"
router.get("/productos", listProducts); 
router.get('/crear-productos', createProduct);
router.post('/crear-productos', storeProduct)
router.get('/editar-productos', editProduct);
router.post('/editar-productos', updateProduct);

// eliminacion de producto
router.get('/eliminar-producto/:id', deleteProduct);
router.delete('/eliminar-producto/:id', destroyProduct);
router.get('/eliminar-producto', deleteProduct);
router.delete('/eliminar-producto/:id', destroyProduct)

module.exports = router;