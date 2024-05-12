const router = require("express").Router()
const { listUsersApi } = require("../../controllers/api/users")

// /api/users
router.get("/", listUsersApi);

module.exports = router;