const router = require("express").Router()
const {listApi} = require("../../controllers/api/admin")

router.get("/productos", listApi);

module.exports = router;