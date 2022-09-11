import { Link } from "react-router-dom";
import "./statusItem.css";

const StatusItem = ({ show, data }) => {
  // const [list, setList] = useState(false);

  // const fetchData = async () => {
  //   const { data } = await axios.get("http://localhost:5500/api/reservation");
  //   console.log(data);
  //   setList(data);
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <>
      <div
        className={` ${
          show === "panel1" ? "status-item-wrapper open" : "status-item-wrapper"
        }`}
      >
        <div className="status-item">
          <table className="status-table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Country</th>
                <th>Room</th>
                <th>Bedding</th>
                <th>Meal</th>
                <th>Check-In</th>
                <th>Check-Out</th>
                <th>Status</th>
                <th>More</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((data, index) => (
                <tr key={data._id}>
                  <td>{index + 1}</td>
                  <td>{data.firstName}</td>
                  <td>{data.email}</td>
                  <td>{data.country}</td>
                  <td>{data.room}</td>
                  <td>{data.bed}</td>
                  <td>{data.meal}</td>
                  <td>{data.checkInDate}</td>
                  <td>{data.checkOutDate}</td>
                  <td>Not Conform</td>
                  <td>
                    <Link
                      to={`/admin/room/${data._id}`}
                      className="button_action"
                    >
                      Action
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default StatusItem;
