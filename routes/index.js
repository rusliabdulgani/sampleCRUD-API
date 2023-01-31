const express = require("express");
const router = express.Router();
const { getUserWithUser } = require("../controller/user");

router.get("/:id", getUserWithUser);

module.exports = router;
