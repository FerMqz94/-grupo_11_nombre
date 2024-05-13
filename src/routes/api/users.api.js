const router = require("express").Router()
const {} = require("../../controllers/api/users")
const {userDetail,renderImg} = require("../../controllers/api/users")

//  api /user   detalle api 
router.get("/detail/:id",userDetail)
router.get("/:image",renderImg)
module.exports = router;