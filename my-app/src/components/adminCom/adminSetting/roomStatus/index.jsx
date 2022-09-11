import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRoomList } from "../../../../redux/actions/roomAction.js";
import AdminTitle from "../../adminTitle";
import RoomCard from "../roomCard";
import "./roomStatus.css";

const UserRoomStatus = () => {
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
      <AdminTitle title="Available" span="Rooms" />
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

export default UserRoomStatus;
