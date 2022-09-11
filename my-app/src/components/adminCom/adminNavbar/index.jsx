import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../../redux/actions/userActions.js";
import "./adminNavbar.css";

const AdminNavbar = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  useEffect(() => {}, [userInfo]);

  return (
    <>
      <div className="an-wrapper">
        <div className="container">
          <div className="admin-navbar flex jc-space-between ai-center">
            <div className="an-left">
              <Link to="/admin/home" className="an-left-menu">
                Home
              </Link>
            </div>
            <div className="an-right">
              <div
                className="an-right-menu"
                onClick={() => setOpenDropdown(!openDropdown)}
              >
                <i className="uil uil-user"></i>
                <i className="uil uil-angle-down"></i>
                {openDropdown && (
                  <div className="an-right-menu-dropdown flex flex-column">
                    <Link
                      to="/admin/userinformation"
                      className="an-right-menu-dropdown-item flex ai-center gap-1"
                    >
                      <i className="uil uil-user"></i>
                      <h5>User Profile</h5>
                    </Link>
                    <Link
                      to="/admin/usersettings"
                      className="an-right-menu-dropdown-item flex ai-center gap-1"
                    >
                      <i className="uil uil-setting"></i>
                      <h5>Settings</h5>
                    </Link>
                    <div
                      className="an-right-menu-dropdown-item flex ai-center gap-1"
                      onClick={logoutHandler}
                    >
                      <i className="uil uil-signout"></i>
                      <h5>Logout</h5>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminNavbar;
