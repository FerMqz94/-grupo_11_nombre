const router = require("express").Router()
//const { storeApi, updateApi } = require("../../controllers/api/admin")
const {listApi, renderImgProduct, categoriesApi, colorsApi, sizesApi, storeApi, editProductApi } = require("../../controllers/api/admin")
const { uploadProducts } = require("../../middlewares/uploads");


// /api/admin
//router.post('/', storeApi),
//router.put('/:id', updateApi)
router.get("/products", listApi);
router.post('/crear-productos', uploadProducts.array('image'), storeApi)
router.get("/images/:image", renderImgProduct)// /api/products/image
router.put("/editar-producto/:id", editProductApi)

//CATEGORÍAS
router.get('/categorias', categoriesApi)

//COLORS
router.get('/colors', colorsApi)

//SIZES
router.get('/sizes', sizesApi)


module.exports = router;