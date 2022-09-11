import asyncHandler from "express-async-handler";
import RoomModel from "../models/roomModel.js";

//@description     Creat new Room
//@route           POST /api/rooms/addroom
//@access          Private
const addRoom = asyncHandler(async (req, res) => {
  const { addRoomType, bedType } = req.body;
  console.log(addRoomType, bedType);

  const room = await RoomModel.create({
    typeOfRoom: addRoomType,
    typeOfBed: bedType,
  });

  res.status(201).json(room);
});

//@description     Fetch Rooms
//@route           POST /api/rooms/
//@access          Private
const getRooms = asyncHandler(async (req, res) => {
  const allRooms = await RoomModel.find();
  res.status(200).json(allRooms);
});

//@description     Delete single room
//@route           GET /api/rooms/:id
//@access          Private
const deleteRoom = asyncHandler(async (req, res) => {
  const room = await RoomModel.findById(req.params.id);

  if (room) {
    await room.remove();
    res.json({ message: "Room Removed" });
  } else {
    res.status(404);
    throw new Error("Room not Found");
  }
});

export { addRoom, getRooms, deleteRoom };
