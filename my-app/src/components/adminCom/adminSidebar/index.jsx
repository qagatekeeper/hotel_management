import "./adminSidebar.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/actions/userActions.js";
import { NavLink } from "react-router-dom";

const sidebarData = [
  {
    icon: <i className="uil uil-dashboard"></i>,
    title: "Status",
    path: "/admin/home",
    tab: "home",
  },
  {
    icon: <i className="uil uil-desktop"></i>,
    title: "News letters",
    path: "/admin/messages",
    tab: "messages",
  },
  {
    icon: <i className="uil uil-chart"></i>,
    title: "Room Booking",
    path: "/admin/home",
    tab: "room",
  },
  {
    icon: <i className="uil uil-bill"></i>,
    title: "Payment",
    path: "/admin/payment",
    tab: "payment",
  },
  {
    icon: <i className="uil uil-user-circle"></i>,
    title: "Profit",
    path: "/admin/profit",
    tab: "profit",
  },
];

const AdminSidebar = (props) => {
  const { activeTab, setActiveTab } = props;
  // const [activeTab, setActiveTab] = useState("home");
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  useEffect(() => {}, [userInfo]);
  return (
    <>
      {sidebarData.map((item, index) => (
        <div
          key={index}
          className="admin-sidebar-item"
          onClick={() => setActiveTab(item.tab)}
        >
          {/* <NavLink
            to={item.path}
            className={`${activeTab === item.title ? "active" : ""}`}
          > */}
          <div
            to={item.path}
            className={`${activeTab === item.title ? "active" : ""}`}
          >
            <div>
              {item.icon}
              {item.title}
            </div>
          </div>
        </div>
      ))}
      <div className="admin-sidebar-item" onClick={logoutHandler}>
        <div>
          <i className="uil uil-sign-out-alt"></i>
          Logout
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
