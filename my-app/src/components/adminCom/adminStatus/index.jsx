import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./adminStatus.css";
import AdminTitle from "../adminTitle";
import StatusItem from "./adminStatusItem";
import BookedRooms from "./adminBookedRooms";
import Followers from "./adminFollowers";

import { getReservationsList } from "../../../redux/actions/reservationActions.js";

import { bookedRoomsData, followers } from "../../../helpers";

const Status = () => {
  const dispatch = useDispatch();
  const reservationsList = useSelector((state) => state.reservationsList);
  const { reservations } = reservationsList;

  const [expanded, setExpanded] = useState("panel1");
  useEffect(() => {
    dispatch(getReservationsList());
  }, [dispatch]);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(panel);
  };

  return (
    <>
      <AdminTitle title="Status" span="Room Booking" />
      <div className="status-wrapper flex flex-column gap-3">
        <div>
          <div
            className={`status-new-roomBooking-container ${
              expanded === "panel1" ? "borderRadiusChange" : ""
            }`}
          >
            <div className="status-new-roomBooking-title">
              <button
                className="new-room-booking-btn"
                onClick={handleChange("panel1")}
              >
                New Room Bookings
                <small>
                  {reservations?.length < 10
                    ? "0" + reservations?.length
                    : reservations?.length}
                </small>
              </button>
            </div>
          </div>
          {expanded === "panel1" && (
            <StatusItem show={expanded} data={reservations} />
          )}
        </div>
        <div>
          <div
            className={`booked-room-container ${
              expanded === "panel2" ? "borderRadiusChange" : ""
            }`}
          >
            <div className="booked-room-title">
              <button
                className="button_action booked-room-btn"
                onClick={handleChange("panel2")}
              >
                Booked Rooms
                <small>
                  {bookedRoomsData.length < 10
                    ? "0" + bookedRoomsData.length
                    : bookedRoomsData.length}
                </small>
              </button>
            </div>
          </div>
          {expanded === "panel2" && <BookedRooms data={bookedRoomsData} />}
        </div>
        <div>
          <div
            className={`follower-container ${
              expanded === "panel3" ? "borderRadiusChange" : ""
            }`}
          >
            <div className="follower-title">
              <button
                className="button_action follower-btn"
                onClick={handleChange("panel3")}
              >
                Followers
                <small>
                  {followers.length < 10
                    ? "0" + followers.length
                    : followers.length}
                </small>
              </button>
            </div>
          </div>
          {expanded === "panel3" && (
            <Followers show={expanded} data={followers} />
          )}
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Status;
