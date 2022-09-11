import React from "react";
import "./followers.css";

const Followers = ({ show, data }) => {
  return (
    <>
      <div
        className={` ${
          show === "panel3" ? "followers-wrapper open" : "followers-wrapper"
        }`}
      >
        <div className="followers-item">
          <table className="followers-table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Follow Start</th>
                <th>Permission status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((data, index) => (
                <tr key={index}>
                  <td>{data.id}</td>
                  <td>{data.fullName}</td>
                  <td>{data.email}</td>
                  <td>{data.followStart}</td>
                  <td>{data.permissionStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <a href="id" className="button_action">
            More Action
          </a>
        </div>
      </div>
    </>
  );
};

export default Followers;
