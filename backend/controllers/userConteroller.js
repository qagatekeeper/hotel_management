import asyncHandler from "express-async-handler";
import UserModel from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

//@description     Auth the user
//@route           POST /api/users/login
//@access          Public
const authUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  const userExists = await UserModel.findOne({ username });
  if (userExists && (await userExists.matchPassword(password))) {
    res.json({
      _id: userExists._id,
      username: userExists.username,
      token: generateToken(userExists._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

//@description     Register new user
//@route           POST /api/users/
//@access          Private
const registerUser = asyncHandler(async (req, res) => {
  const { newUsername, newPassword } = req.body;

  const userExists = await UserModel.findOne({ username: newUsername });
  if (userExists) {
    res.status(404);
    throw new Error("User already exists");
  }

  const user = await UserModel.create({
    username: newUsername,
    password: newPassword,
    showPassword: newPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      username: user.username,
      showPassword: user.showPassword,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});

// @desc    Get logged in users
// @route   GET /api/users/
// @access  Private
const getUsers = asyncHandler(async (req, res) => {
  const allUsers = await UserModel.find();
  res.json(allUsers);
});

//@description     Fetch single user
//@route           GET /api/users/:id
//@access          Private
const getUserById = asyncHandler(async (req, res) => {
  const user = await UserModel.findById(req.params.id);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

//@description     Delete single user
//@route           GET /api/users/:id
//@access          Private
const DeleteUser = asyncHandler(async (req, res) => {
  const user = await UserModel.findById(req.params.id);

  if (user) {
    await user.remove();
    res.json({ message: "User Removed" });
  } else {
    res.status(404);
    throw new Error("User not Found");
  }
});

// @desc    Update a user
// @route   PUT /api/users/:id
// @access  Private
const UpdateUser = asyncHandler(async (req, res) => {
  const { newuser, newpassword } = req.body;
  console.log(req.params.id);

  const user = await UserModel.findById(req.params.id);

  if (user) {
    user.username = newuser;
    user.password = newpassword;
    user.showPassword = newpassword;

    const updatedUser = await user.save();
    res.json(updatedUser);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

export {
  authUser,
  registerUser,
  getUsers,
  getUserById,
  DeleteUser,
  UpdateUser,
};
