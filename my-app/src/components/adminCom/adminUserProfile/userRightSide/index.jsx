import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./userProfileRightSide.css";
import { userProfileHeader } from "../../../../helpers";
import AdminTitle from "../../adminTitle";
import AddUserInfo from "../../adminUser/addUserInfo";
import { getUsersList } from "../../../../redux/actions/userActions.js";
import User from "../../adminUser/user";

const UserProfileRightSide = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.usersList);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDelete = useSelector((state) => state.userDelete);
  const { success: successDelete } = userDelete;
  const userCreate = useSelector((state) => state.userCreate);
  const { success: successCreate } = userCreate;
  const userUpdate = useSelector((state) => state.userUpdate);
  const { success: successUpdate } = userUpdate;

  useEffect(() => {
    dispatch(getUsersList());
    handleClose();
  }, [dispatch, userInfo, successDelete, successCreate, successUpdate]);

  return (
    <>
      <AdminTitle title="ADMINISTRATOR" span="accounts" />
      <div className="user-wrapper flex flex-column gap-1">
        <div className="userprofile">
          <table className="userprofile-table ">
            <thead>
              <tr>
                {userProfileHeader.map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {users?.map((user, index) => (
                <tr key={index}>
                  <User user={user} index={index} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <button
        className="button_action add-new-btn"
        data-bs-toggle="modal"
        onClick={handleShow}
        // data-bs-target="#addUserInfo"
      >
        Add New Admin
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add the User name and Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddUserInfo />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UserProfileRightSide;
