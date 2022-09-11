import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AdminNavbar, UserSetting } from "../../components/adminCom";

const UserSettings = () => {
  let navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    if (!userInfo) {
      navigate("/admin");
    }
  }, [navigate, userInfo]);
  return (
    <>
      <AdminNavbar />
      <UserSetting />
    </>
  );
};

export default UserSettings;
