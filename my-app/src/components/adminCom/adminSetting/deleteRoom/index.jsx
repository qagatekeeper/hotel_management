import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getRoomList,
  deleteRoom,
} from "../../../../redux/actions/roomAction.js";
import "./deleteRoom.css";
import AdminTitle from "../../adminTitle";
import RoomCard from "../roomCard";
import { useForm } from "react-hook-form";

const DeleteRoom = () => {
  const dispatch = useDispatch();
  const { rooms } = useSelector((state) => state.roomsList);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const roomDelete = useSelector((state) => state.roomDelete);
  const { success: successDelete } = roomDelete;
  const roomCreate = useSelector((state) => state.roomCreate);
  const { success: successCreate } = roomCreate;

  useEffect(() => {
    dispatch(getRoomList());
  }, [dispatch, userInfo, successDelete, successCreate]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteRoom(data));
      reset();
    }
    reset();
  };

  const onError = (errors) => {
    console.log(errors);
  };
  return (
    <div>
      <AdminTitle title="DELETE ROOM" />
      <div className="delete-room-top-wrapper">
        <div className="delete-room-top">Delete room</div>
        <div className="delete-room-bottom">
          <form
            onSubmit={handleSubmit(onSubmit, onError)}
            method="post"
            className="delete-room-form"
          >
            <div className="delete-room-formGroup">
              <lable>Select the Room ID *</lable>
              <select
                {...register("deleteRoomId", {
                  required: "RoomId is Required",
                })}
              >
                <option value="" selected></option>
                {rooms?.map((item, index) => (
                  <option
                    value={item._id}
                    key={index}
                    style={{ textTransform: "capitalize" }}
                  >
                    {index + 1 + " = " + item.typeOfBed + "/" + item.typeOfRoom}
                  </option>
                ))}
              </select>
              {errors.deleteRoomId && (
                <p className="errors">{errors.deleteRoomId.message}</p>
              )}
            </div>

            <input
              type="submit"
              name="submit"
              value="Delete Room"
              className="button_action"
            />
          </form>
        </div>
      </div>
      <div className="urs-wrapper grid">
        {rooms?.map((item, index) => (
          <div key={index}>
            <RoomCard name={item.typeOfBed} roomCategory={item.typeOfRoom} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeleteRoom;
