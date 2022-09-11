import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRoomList } from "../../../../redux/actions/roomAction.js";
import "./addRoom.css";
import AdminTitle from "../../adminTitle";
import AddForm from "./addForm";
import RoomInfo from "./roominfo";

const AddRoom = () => {
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

  return (
    <div>
      <AdminTitle title="NEW ROOM" />
      <div className="newRoom-wrapper flex gap-2">
        <div className="newRoom-addForm">
          <AddForm />
        </div>
        <div className="newRoom-roomInfo">
          <RoomInfo rooms={rooms} />
        </div>
      </div>
    </div>
  );
};

export default AddRoom;
