const router = require("express").Router()
const {listApi} = require("../../controllers/api/admin")

router.get("/products", listApi);

module.exports = router;