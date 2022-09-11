import React, { useState } from "react";
import "./adminMain.css";
import AdminSidebar from "../adminSidebar";
import {
  Status,
  NewsLetters,
  RoomBooking,
  Payment,
  Profit,
} from "../index.jsx";
import { NavPage } from "../../../pages";

const AdminMain = () => {
  const [activeTab, setActiveTab] = useState("home");
  return (
    <div className="admin-main flex">
      <div className="admin-sidebar">
        <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        {/* <AdminSidebar /> */}
      </div>
      <div className="admin-Rightbar">{getCorrectScreen(activeTab)}</div>
      {/* <div className="admin-Rightbar">
        <NavPage activeTab={activeTab} />
      </div> */}
    </div>
  );
};

const getCorrectScreen = (tab) => {
  switch (tab) {
    case "home":
      return <Status />;

    case "messages":
      return <NewsLetters />;

    case "room":
      return <RoomBooking />;

    case "payment":
      return <Payment />;

    case "profit":
      return <Profit />;

    default:
      return <Status />;
  }
};

export default AdminMain;
