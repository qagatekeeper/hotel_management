import "./roomCard.css";
import React, { useEffect } from "react";
import { useState } from "react";

const RoomCard = (props) => {
  const { name, roomCategory } = props;
  const [colors, setColor] = useState("");

  useEffect(() => {
    if (roomCategory === "Superior Room") {
      setColor("#4CB1CF");
    } else if (roomCategory === "Single Room") {
      setColor("#F0433D");
    } else if (roomCategory === "Deluxe Room") {
      setColor("#5cb85c");
    } else if (roomCategory === "Guest House") {
      setColor("#f0ad4e");
    }
  }, []);

  return (
    <div className="rooms-card">
      <i className="uil uil-users-alt" style={{ color: colors }}></i>
      <h1 style={{ color: colors }}>{name}</h1>
      <div className="rooms-card-last" style={{ backgroundColor: colors }}>
        <h2>{roomCategory}</h2>
      </div>
    </div>
  );
};

export default RoomCard;
