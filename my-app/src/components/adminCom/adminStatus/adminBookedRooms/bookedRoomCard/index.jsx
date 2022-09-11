import React from "react";
import "./bookedRoomCard.css";

const BookedRoomCard = (props) => {
  const { name, id, roomCategory } = props;
  return (
    <>
      <div className="bookedRooms-card">
        <i className="uil uil-users-alt"></i>
        <h1>{name}</h1>
        <div className="flex card-bottom absolute-center">
          <a href={id}>
            <button className="button_action">Show</button>
          </a>
          <h2>{roomCategory}</h2>
        </div>
      </div>
    </>
  );
};

export default BookedRoomCard;
