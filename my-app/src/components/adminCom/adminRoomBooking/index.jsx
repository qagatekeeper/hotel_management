import AdminTitle from "../adminTitle";
import "./roomBooking.css";
import { useNavigate, useParams } from "react-router-dom";

import { rightsideData } from "../../../helpers";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReservationDetails } from "../../../redux/actions/reservationActions";

const RoomBooking = () => {
  // const [reservation, setReservation] = useState([]);
  let { id } = useParams();
  // const fetchData = async () => {
  //   const { data } = await axios.get(
  //     `http://localhost:5500/api/reservation/${id}`
  //   );
  //   console.log(data);
  //   setReservation(data);
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  const dispatch = useDispatch();
  let navigate = useNavigate();
  const reservationDetails = useSelector((state) => state.reservationDetails);
  const { reservation } = reservationDetails;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch(getReservationDetails(id));
    if (!userInfo) {
      navigate("/admin");
    }
  }, [dispatch, userInfo]);

  return (
    <>
      <AdminTitle title="Room Booking" span={reservation?.checkInDate} />
      <div className="roomBooking-wrapper flex gap-2">
        <div className="roomBooking-left">
          <div className="roomBooking-title">Booking Conformation</div>
          <div className="roomBooking-table-container">
            <table className="roomBooking-table">
              <thead>
                <tr>
                  <th>DESCRIPTION</th>
                  <th>INFORMATION</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ fontWeight: "bold" }}>Name</td>
                  <td>
                    {reservation?.firstName + " " + reservation?.lastName}
                  </td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "bold" }}>Email</td>
                  <td>{reservation?.email}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "bold" }}>Nationality</td>
                  <td>{reservation?.nationality}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "bold" }}>Country</td>
                  <td>{reservation?.country}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "bold" }}>Phone Number</td>
                  <td>{reservation?.phoneNumber}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "bold" }}>Type of the Room</td>
                  <td>{reservation?.room}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "bold" }}>No. of the Room</td>
                  <td>{reservation?.roomNumber}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "bold" }}>Meal Plan</td>
                  <td>{reservation?.meal}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "bold" }}>Bedding</td>
                  <td>{reservation?.bed}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "bold" }}>Check-In Date</td>
                  <td>{reservation?.checkInDate}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "bold" }}>Check-Out Date</td>
                  <td>{reservation?.checkOutDate}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "bold" }}>No. of days</td>
                  <td>{reservation?.roomNumber}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "bold" }}>Status Level</td>
                  <td>Not Conform</td>
                </tr>
              </tbody>
              {/* <tbody>
                {roomBookingData.map((data, index) => (
                  <tr key={index}>
                    <td style={{ fontWeight: "bold" }}>{data.description}</td>
                    <td>{data.information}</td>
                  </tr>
                ))}
              </tbody> */}
            </table>
          </div>
          <div className="roomBooking-conformation-container flex flex-column gap-1">
            <small>Select the Conformation</small>
            <select name="Room-Booking" defaultValue>
              <option value="" selected>
                --Select Conformation--
              </option>
              <option value="conform">Conform</option>
            </select>
            <button className="button_action success-btn">Conform</button>
          </div>
        </div>
        <div className="roomBooking-right">
          <div className="roomBooking-right-header">available room details</div>
          <div className="roomBooking-right-table">
            <table className="roomBooking-right-table">
              <tbody>
                {rightsideData.map((data, index) => (
                  <tr key={index} style={{ paddingTop: "100px" }}>
                    <td style={{ fontWeight: "bold" }}>{data.roomName}</td>
                    <td>
                      <button
                        className={`button_action btn-number ${data.className}`}
                      >
                        {data.number}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomBooking;
