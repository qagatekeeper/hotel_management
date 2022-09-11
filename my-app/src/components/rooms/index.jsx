import React from "react";
import "./rooms.css";
import { roomImgs } from "../../helpers/data/roomData.js";
import RoomCard from "./roomCard";

const Rooms = () => {
  return (
    <div id="rooms" className="rooms-wrapper">
      <div className="rooms-container container">
        <div className="rooms text-center">
          <h3 className="title">Rooms And Rates</h3>
          <div className="rooms-card-wrapper grid ">
            {roomImgs.map((item, index) => (
              <RoomCard
                roomImg={item.roomImg}
                roomCategory={item.roomCategory}
                prise={item.prise}
                value={item.value}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
