import { Link } from "react-router-dom";
import { ReservationNavigationToHome } from "../reservationStyle.js";

const ReservationLeftSide = () => {
  return (
    <d>
      <ReservationNavigationToHome>
        <Link to="/" className="flex absolute-center">
          <i className="uil uil-home"></i>
          <h3>HomePage</h3>
        </Link>
      </ReservationNavigationToHome>
    </d>
  );
};

export default ReservationLeftSide;
