import React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

const RoomCard = (props) => {
  const { roomImg, roomCategory, prise, value } = props;
  return (
    <>
      <div className="room-card">
        <div className="room-card-top">
          <img src={roomImg} alt="" className="room-card-image" />
          <div className="room-card-roomCategory">{roomCategory}</div>
        </div>
        <div className="room-card-bottom">
          <div className="room-card-rating">
            <Stack spacing={1}>
              <Rating
                name="half-rating"
                size="small"
                defaultValue={value}
                precision={0.5}
              />
            </Stack>
          </div>
          <div className="room-card-priseCategory flex absolute-center jc-space-between">
            <h3 className="room-card-prise">
              <span>$</span>
              {prise}
            </h3>
            <Link to="/reservation" className="btn">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomCard;
