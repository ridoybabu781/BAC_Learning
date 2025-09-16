const generateToken = require("../utils/generateToken");
const bcrypt = require("bcrypt");
const httpErrors = require("http-errors");
const sendEmail = require("../utils/sendEmail");
const { StatusCodes } = require("http-status-codes");

const EmailCode = require("../models/emailCode");
const User = require("../models/user.model");

const sendVerificationCode = async (req, res, next) => {
  try {
    const { email } = req.body;

    if (!email) {
      return next(httpErrors(StatusCodes.NOT_FOUND, "Email not found"));
    }

    const subject = "Your Organic-Commerce Verification Code";

    const code = Math.floor(100000 + Math.random() * 900000);

    const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Email Verification</title>
      </head>
      <body style="margin:0; padding:0; background-color:#f4f4f4; font-family:Arial, sans-serif;">
        <table width="100%" cellspacing="0" cellpadding="0" style="background-color:#f4f4f4; padding:40px 0;">
          <tr>
            <td align="center">
              <table width="600" cellspacing="0" cellpadding="0" style="background:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.1);">
                <tr>
                  <td style="background:#16a34a; padding:20px; text-align:center; color:#ffffff; font-size:24px; font-weight:bold;">
                    Organic-Commerce
                  </td>
                </tr>
                <tr>
                  <td style="padding:30px; color:#333333; font-size:16px; line-height:1.6;">
                    <h2 style="margin-top:0; color:#16a34a;">Verify Your Email</h2>
                    <p>Thank you for creating an account with <strong>Organic-Commerce</strong>. To complete your registration, please use the verification code below:</p>
                    <div style="margin:30px 0; text-align:center;">
                      <span style="display:inline-block; background:#16a34a; color:#ffffff; font-size:24px; font-weight:bold; letter-spacing:3px; padding:15px 30px; border-radius:6px;">
                        ${code}
                      </span>
                    </div>
                    <p>This code will expire in <strong>10 minutes</strong>. If you did not request this, you can safely ignore this email.</p>
                    <p style="margin-top:30px;">Best regards, <br/>The Organic-Commerce Team</p>
                  </td>
                </tr>
                <tr>
                  <td style="background:#f4f4f4; text-align:center; padding:15px; font-size:12px; color:#888888;">
                    © ${new Date().getFullYear()} Organic-Commerce. All rights reserved.
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    await sendEmail(email, subject, html);

    const emailCode = await EmailCode.create({
      email,
      verificationCode: code,
      expiresIn: new Date(Date.now() + 15 * 60 * 1000),
    });

    if (!emailCode) {
      return next(httpErrors(StatusCodes.BAD_REQUEST, "Code saving failed"));
    }

    res
      .status(StatusCodes.OK)
      .json({ message: "A 6 digit code sent to your email" });
  } catch (error) {
    next(error);
  }
};

const verifyCode = async (req, res, next) => {
  try {
    const { email, verificationCode } = req.body;

    if (!email || !verificationCode) {
      return next(
        httpErrors(StatusCodes.NOT_FOUND, "Verification code is missing")
      );
    }

    const emailCode = await EmailCode.findOne({
      email,
      verificationCode: verificationCode,
    });

    if (!emailCode) {
      return next(
        httpErrors(
          StatusCodes.BAD_REQUEST,
          "Invalid or expired verification code"
        )
      );
    }

    if (emailCode.expiresIn < new Date()) {
      return next(httpErrors(StatusCodes.BAD_REQUEST, "Code expired"));
    }

    await EmailCode.updateOne(
      { _id: emailCode._id },
      { $set: { verified: true } }
    );

    res.status(StatusCodes.OK).json({ message: "Verified" });
  } catch (error) {
    next(error);
  }
};

const createUser = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !password || !role || !email)
      return next(
        httpErrors(StatusCodes.BAD_REQUEST, "All fields are required")
      );
    const emailCode = await EmailCode.findOne({ email, verified: true });
    if (!emailCode) {
      return next(httpErrors(StatusCodes.UNAUTHORIZED, "Email not verified"));
    }

    const hashedPass = await bcrypt.hash(password, 10);
    const roleType = role === "seller" ? "pending" : "no";

    await User.create({
      name,
      email,
      role,
      isSeller: roleType,
      password: hashedPass,
    });

    let message = "";

    if (roleType === "pending") {
      message =
        "Your account request was submitted. Please wait for verification.";
      return res.status(StatusCodes.OK).json({ message });
    } else {
      message = "User registered successfully. Go to login page to sign in.";
      return res.status(StatusCodes.CREATED).json({ message });
    }
  } catch (error) {
    next(error);
  }
};
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return next(
        httpErrors(StatusCodes.BAD_REQUEST, "All fields are required")
      );

    const user = await User.findOne({ email });
    if (!user) return next(httpErrors(404, "User not found"));

    if (user.role === "seller" && user.isSeller !== "yes")
      return next(httpErrors(statusbar, "Seller login denied"));

    if (user.isBlocked) {
      return next(httpErrors(StatusCodes.UNAUTHORIZED, "User is blocked"));
    }

    const passMatch = await bcrypt.compare(password, user.password);
    if (!passMatch)
      return next(
        httpErrors(StatusCodes.UNAUTHORIZED, "Password does not match")
      );

    const userData = user.toObject();
    delete userData.password;

    const token = generateToken({ id: userData._id, email: userData.email });

    res
      .status(StatusCodes.OK)
      .cookie("token", token, { httpOnly: true, secure: true })
      .json({ user: userData, token, message: "Logged in successfully" });
  } catch (error) {
    next(error);
  }
};
const profile = async (req, res, next) => {
  try {
    const userId = req.userId;

    const user = await User.findById(userId).select("-password");
    if (!user) {
      throw new Error("User Not Found");
    }

    if (user.isBlocked) {
      return res
        .redirect("/api/auth/logout")
        .status(StatusCodes.UNAUTHORIZED)
        .json({ message: "User Is Blocked" });
    }

    res.status(StatusCodes.OK).json({ message: "User Data Fetched", user });
  } catch (error) {
    next(error);
  }
};
const logout = async (req, res, next) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: true,
    });

    res.status(StatusCodes.OK).json({ message: "Logged out successfully" });
  } catch (error) {
    next(error);
  }
};

// password update and forget

const updatePassword = async (req, res, next) => {
  try {
    const userId = req.userId;
    const { oldPass, newPass } = req.body;

    const user = await User.findById(userId);
    if (!user) return next(createError(404, "User not found"));

    const isMatch = await bcrypt.compare(oldPass, user.password);
    if (!isMatch) return next(createError(401, "Incorrect old password"));

    const hashedPass = await bcrypt.hash(newPass, 10);

    await User.findByIdAndUpdate(userId, { password: hashedPass });

    res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    next(error);
  }
};

const forgetPasswordCode = async (req, res, next) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) return next(createError(404, "No user found with this email"));

    const code = Math.floor(100000 + Math.random() * 900000);

    await sendEmail(
      email,
      "Code for Password Reset",
      `<h2>Your password reset code is: <span style="background:blue;color:white">${code}</span></h2>`
    );

    await EmailCode.create({
      email,
      verificationCode: code.toString(),
      expiresIn: new Date(Date.now() + 15 * 60 * 1000),
    });

    res.status(StatusCodes.OK).json({ message: "Code sent to your email" });
  } catch (error) {
    next(error);
  }
};

const forgetPassword = async (req, res, next) => {
  try {
    const { email, verificationCode, newPassword } = req.body;

    if (!email || !verificationCode || !newPassword)
      return next(
        createError(StatusCodes.BAD_REQUEST, "All fields are required")
      );

    const storedCode = await EmailCode.findOne({
      email,
      verificationCode: Number(verificationCode),
    });

    if (!storedCode)
      return next(
        createError(StatusCodes.BAD_REQUEST, "Invalid or expired code")
      );

    if (storedCode.expiresIn < new Date()) {
      await EmailCode.deleteOne({ _id: storedCode._id });
      return next(createError(StatusCodes.BAD_REQUEST, "Code expired"));
    }

    const hashedPass = await bcrypt.hash(newPassword, 10);

    await User.findOneAndUpdate(
      { email },
      { password: hashedPass },
      { new: true }
    );

    await EmailCode.deleteOne({ _id: storedCode._id });

    res
      .status(StatusCodes.OK)
      .json({ message: "Password updated successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  sendVerificationCode,
  verifyCode,
  createUser,
  login,
  profile,
  logout,
  updatePassword,
  forgetPasswordCode,
  forgetPassword,
};
