const router = require("express").Router();
const {
  createAdmin,
  blockProfile,
  deleteProfile,
  unBlockProfile,
  getBlockedProfile,
} = require("../controllers/admin.controller");
const adminCheck = require("../middleware/adminCheck");
const User = require("../middleware/isUser");

router.post("/createAdmin", createAdmin);
router.post("/deleteProfile", User, adminCheck, deleteProfile);
router.put("/blockUser", User, adminCheck, blockProfile);
router.put("/unBlockUser", User, adminCheck, unBlockProfile);
router.get("/getBlockedProfiles", User, adminCheck, getBlockedProfile);

module.exports = router;
