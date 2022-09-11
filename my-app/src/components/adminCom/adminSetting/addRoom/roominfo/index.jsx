import "./roominfo.css";

const RoomInfo = ({ rooms }) => {
  return (
    <div>
      <div className="roomInfo-wrapper">
        <div className="roomInfo-top">ROOMS INFORMATION</div>
        <div className="roomInfo-table-wrapper">
          <div className="roomInfo-table-container">
            <table className="roomInfo-table">
              <thead>
                <tr>
                  <th>Room ID</th>
                  <th>Room Type</th>
                  <th> Bedding</th>
                </tr>
              </thead>
              <tbody>
                {rooms?.map((data, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td
                      style={{
                        textTransform: "capitalize",
                      }}
                    >
                      {data.typeOfRoom}
                    </td>
                    <td
                      style={{
                        fontWeight: "bold",
                        textTransform: "capitalize",
                      }}
                    >
                      {data.typeOfBed}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RoomInfo;
