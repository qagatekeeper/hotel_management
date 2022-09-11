import express from "express";
const router = express.Router();

import {
  addRoom,
  getRooms,
  deleteRoom,
} from "../controllers/roomConteroller.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/addroom").post(protect, addRoom);
router.route("/").get(protect, getRooms);

router.route("/:id").delete(protect, deleteRoom);

export default router;
