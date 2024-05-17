const router = require("express").Router()
const { storeApi, updateApi } = require("../../controllers/api/admin")
const {listApi} = require("../../controllers/api/admin")

router.get("/products", listApi);

// /api/admin
router.post('/', storeApi),
router.put('/:id', updateApi)
module.exports = router;