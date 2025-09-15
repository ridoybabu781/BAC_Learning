const { StatusCodes } = require("http-status-codes");
const User = require("../models/user.model");

const createAdmin = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return next(createError(StatusCodes.NOT_FOUND, "Something is missing"));
    }

    const hashedPass = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPass,
      role: "admin",
    });

    await user.save();

    res.status(StatusCodes.OK).json({
      message: "Admin Created Successfull. Go to login page for login",
    });
  } catch (error) {
    next(error);
  }
};

const deleteProfile = async (req, res, next) => {
  try {
    const profileId = req.params.id;

    const res = await User.findByIdAndDelete(profileId);

    if (!res) {
      return next(createError(StatusCodes.BAD_REQUEST, "Something went wrong"));
    }
    res
      .status(StatusCodes.OK)
      .json({ message: "Profile Deleted Successfully" });
  } catch (error) {}
};

const blockProfile = async (req, res, next) => {
  try {
    const id = req.params.id;

    const blockedUser = await User.findByIdAndUpdate(
      id,
      { isBlocked: true },
      { new: true }
    );

    if (!blockedUser) {
      return next(
        createError(StatusCodes.BAD_REQUEST, "Profile Blocking Failed")
      );
    }

    res
      .status(StatusCodes.OK)
      .json({ message: "One Profile Blocked Successfully", blockedUser });
  } catch (error) {
    next(error);
  }
};

const unBlockProfile = async (req, res, next) => {
  try {
    const id = req.params.id;

    const unBlockedUser = await User.findByIdAndUpdate(
      id,
      { isBlocked: false },
      { new: true }
    );

    if (!unBlockedUser) {
      return next(
        createError(StatusCodes.BAD_REQUEST, "Profile Unblocking Failed")
      );
    }

    res
      .status(StatusCodes.OK)
      .json({ message: "One Profile Blocked Successfully", unBlockedUser });
  } catch (error) {
    next(error);
  }
};

const getBlockedProfile = async (req, res, next) => {
  try {
    const blockedProfiles = await User.find({ isBlocked: true });

    if (!blockedProfiles) {
      return next(
        createError(StatusCodes.NOT_FOUND, "There's no Blocked Profiles")
      );
    }

    res
      .status(StatusCodes.OK)
      .json({ message: "All Blocked Profile Fetched", blockedProfiles });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createAdmin,
  deleteProfile,
  blockProfile,
  unBlockProfile,
  getBlockedProfile,
};
