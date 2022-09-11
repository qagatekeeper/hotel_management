import express from "express";
const router = express.Router();
import { protect } from "../middleware/authMiddleware.js";
import {
  createReservation,
  getReservationsList,
  getReservationById,
} from "../controllers/reservationController.js";

router.route("/:id").get(protect, getReservationById);
router.route("/").get(protect, getReservationsList);
router.route("/create").post(createReservation);

export default router;
