import mongoose from "mongoose";

const reservationSchema = mongoose.Schema(
  {
    title: {
      type: "string",
      required: true,
    },
    firstName: {
      type: "string",
      required: true,
    },
    lastName: {
      type: "string",
      required: true,
    },
    email: {
      type: "string",
      required: true,
      unique: true,
    },
    nationality: {
      type: "string",
      required: true,
    },
    country: {
      type: "string",
      required: true,
    },
    phoneNumber: {
      type: "string",
      required: true,
    },
    room: {
      type: "string",
      required: true,
    },
    bed: {
      type: "string",
      required: true,
    },
    roomNumber: {
      type: "string",
      required: true,
    },
    meal: {
      type: "string",
      required: true,
    },
    checkInDate: {
      type: "string",
      required: true,
    },
    checkOutDate: {
      type: "string",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Reservation = mongoose.model("Reservation", reservationSchema);

export default Reservation;
