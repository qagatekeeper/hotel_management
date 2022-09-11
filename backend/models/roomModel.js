import mongoose from "mongoose";

const roomSchema = mongoose.Schema(
  {
    typeOfRoom: {
      type: "string",
      required: true,
    },
    typeOfBed: {
      type: "string",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Room = mongoose.model("Room", roomSchema);

export default Room;
