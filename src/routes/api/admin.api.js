const router = require("express").Router()
const { storeApi, updateApi } = require("../../controllers/api/admin")
const {listApi, renderImgProduct, } = require("../../controllers/api/admin")


// /api/admin
router.post('/', storeApi),
router.put('/:id', updateApi)
router.get("/products", listApi);
router.post('/crear-productos', uploadProducts.array('image'), storeApi)
router.get("/images/:image", renderImgProduct)// /api/products/image

//CATEGORÍAS
router.get('/categorias', categoriesApi)

//COLORS
router.get('/colors', colorsApi)

//SIZES
router.get('/sizes', sizesApi)


module.exports = router;