const router = require("express").Router()
const { storeApi, updateApi } = require("../../controllers/api/admin")


// /api/admin
router.post('/', storeApi),
router.put('/:id', updateApi)
module.exports = router;