import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AdminNavbar, UserProfile } from "../../components/adminCom";

const UserInformation = () => {
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
      <UserProfile />
    </>
  );
};

export default UserInformation;
