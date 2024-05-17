const router = require("express").Router()
const {productDetailApi} = require("../../controllers/api/products")

// api/productos/:id
router.get("/:id", productDetailApi);

module.exports = router;