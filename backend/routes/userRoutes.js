import express from "express";
const router = express.Router();

import {
  authUser,
  registerUser,
  getUsers,
  getUserById,
  DeleteUser,
  UpdateUser,
} from "../controllers/userConteroller.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/login").post(authUser);
router.route("/register").post(protect, registerUser);
router.route("/showusers").get(protect, getUsers);

router
  .route("/:id")
  .put(protect, UpdateUser)
  .delete(protect, DeleteUser)
  .get(protect, getUserById);


export default router;