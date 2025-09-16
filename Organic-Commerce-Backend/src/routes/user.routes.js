const {
  sendVerificationCode,
  verifyCode,
  createUser,
  login,
  profile,
  logout,
  updatePassword,
  forgetPasswordCode,
  forgetPassword,
} = require("../controllers/user.controller");
const User = require("../middleware/isUser");
const validate = require("../middleware/validate");
const {
  verificationEmailValidate,
  createAccountSchema,
  loginSchema,
  verificationCodeValidate,
} = require("../validator/userValidator");

const router = require("express").Router();

router.post(
  "/sendVerificationCode",
  validate(verificationEmailValidate),
  sendVerificationCode
);

router.post("/verifyEmail", validate(verificationCodeValidate), verifyCode);
router.post("/register", validate(createAccountSchema), createUser);
router.post("/login", validate(loginSchema), login);
router.post("/profile", User, profile);
router.post("/logout", User, logout);

//password forget or change
router.put("/updatePassword", User, updatePassword);
router.post("/forgetPassCode", User, forgetPasswordCode);
router.post("/forgetPassword", User, forgetPassword);

module.exports = router;
