const router = require("express").Router()
const { listUsersApi } = require("../../controllers/api/users")

// /api/users
router.get("/", listUsersApi);

const {} = require("../../controllers/api/users")

//  api /user   detalle api 
router.get("/detail/:id",userDetail)
router.get("/:image",renderImg)// /api/users
router.get("/", listUsersApi);

module.exports = router;