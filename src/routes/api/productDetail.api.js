const router = require("express").Router()
const {productDetailApi, renderImg} = require("../../controllers/api/products")
// api/productos/:id
router.get("/:id", productDetailApi);

router.get("/image/:image", renderImg)

module.exports = router;