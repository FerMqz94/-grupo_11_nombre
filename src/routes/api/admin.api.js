const router = require("express").Router()
const { storeApi, updateApi } = require("../../controllers/api/admin")
const {listApi, renderImgProduct, } = require("../../controllers/api/admin")


// /api/admin
router.post('/', storeApi),
router.put('/:id', updateApi)
router.get("/products", listApi);
router.get("/products/:image", renderImgProduct)// /api/products/image
module.exports = router;