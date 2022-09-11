import React from "react";
import BookedRoomCard from "./bookedRoomCard";
import "./bookedRooms.css";

const BookedRooms = ({ data }) => {
  return (
    <>
      <div className="bookedRooms-wrapper">
        <div className="grid grid-container">
          {data.map((details, index) => (
            <BookedRoomCard
              key={index}
              id={details.id}
              name={details.name}
              roomCategory={details.roomCategory}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default BookedRooms;
