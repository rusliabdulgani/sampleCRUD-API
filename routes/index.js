const express = require("express");
const router = express.Router();
const {
  getUserWithUser,
  getAllUser,
  createUser,
  deleteUser,
  updateUser,
} = require("../controller/user");

router.get("/:id", getUserWithUser);
router.get("/", getAllUser);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
