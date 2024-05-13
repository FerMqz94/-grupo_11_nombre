const router = require("express").Router()
listUsersApi: require("../users/listUsers.controller.api"),
userDetail=require("../../controllers/api/users/userDetail.controller.api"),
renderImg = require('../../controllers/api/users/renderImg.controller.api'),
module.exports = router;