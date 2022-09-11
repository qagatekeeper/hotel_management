import { useState } from "react";
import AddRoom from "./addRoom";
import DeleteRoom from "./deleteRoom";
import UserRoomStatus from "./roomStatus";
import "./setting.css";
import UserSettingSidebar from "./userSettingSidebar";

const UserSetting = () => {
  const [activeTab, setActiveTab] = useState("room-status");

  return (
    <div className="userSetting-wrapper flex">
      <div className="userSetting-sidebar">
        <UserSettingSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <div className="userSetting-rightbar">
        {activeTab === "room-status" && <UserRoomStatus />}
        {activeTab === "add-room" && <AddRoom />}
        {activeTab === "delete-room" && <DeleteRoom />}
      </div>
    </div>
  );
};

export default UserSetting;
