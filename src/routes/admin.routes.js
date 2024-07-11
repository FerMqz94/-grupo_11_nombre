const express = require("express");
const router = express.Router();
const { createProduct, storeProduct, editProduct, updateProduct, listProducts, deleteProduct, destroyProduct } = require("../controllers/admin");
const { uploadProducts } = require("../middlewares/uploads");
const {adminValidation} = require("../middlewares/adnimValidation"); 
// "/admin"
router.get("/productos",adminValidation, listProducts); 
router.get('/crear-productos',adminValidation, createProduct);
router.post('/crear-productos', adminValidation,uploadProducts.array('image'), storeProduct)
router.get('/editar-productos/:id', adminValidation,editProduct);
router.put('/editar-productos/:id',adminValidation, uploadProducts.array('image'), updateProduct);

// eliminacion de producto
router.get('/eliminar-producto/:id', adminValidation,deleteProduct);
router.delete('/eliminar-producto/:id',adminValidation, destroyProduct);
router.get('/eliminar-producto', adminValidation,deleteProduct);
router.delete('/eliminar-producto/:id', adminValidation,destroyProduct)

module.exports = router;