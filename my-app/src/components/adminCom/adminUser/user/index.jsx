import { useDispatch } from "react-redux";
import { deleteUser } from "../../../../redux/actions/userActions.js";
import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import UpdateUserInfo from "../updateUserInfo/index.jsx";

const User = ({ user, index }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteUser(id));
    }
  };
  return (
    <>
      <td>{index + 1}</td>
      <td>{user.username}</td>
      <td>{user.showPassword}</td>
      <td>
        <button
          className="button_action"
          data-bs-toggle="modal"
          onClick={handleShow}
          // data-bs-target="#updateUserInfo"
        >
          Update
        </button>
      </td>
      <td>
        <button
          className="button_action  delet-btn"
          onClick={() => deleteHandler(user._id)}
        >
          Delete
        </button>
      </td>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Change the User name and Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UpdateUserInfo theUser={user} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose} size="sm">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default User;
