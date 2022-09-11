import AdminTitle from "../adminTitle";
import "./newsLetters.css";
import { followers } from "../../../helpers";
import Pagination from "../pagination";
import { useState } from "react";

const NewsLetters = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [listPerPage, setListPerPage] = useState(10);
  const handleAddrTypeChange = (e) => setListPerPage(e.target.value);

  const indexOfLastEmployee = currentPage * listPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - listPerPage;
  const list = followers.slice(indexOfFirstEmployee, indexOfLastEmployee);
  const totalPagesNum = Math.ceil(followers.length / listPerPage);

  return (
    <div>
      <AdminTitle title="News Letters" span="Panel" />
      <div className="nl-wrapper">
        <div className="nl-top">
          <h1>Send the news letters to followers</h1>
          <button className="button_action">Send New News Letters</button>
        </div>
        <div className="nl-bottom flex flex-column gap-3">
          <div className="nl-bottom-top flex ai-center jc-space-between">
            <div className="nl-bottom-top-left flex ai-center">
              <select name="pages" onChange={handleAddrTypeChange}>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
              <small>Records per page</small>
            </div>
            <div className="nl-bottom-top-right flex ai-center">
              <label>Search:</label>
              <input type="text" autoComplete="Off" name="search" />
            </div>
          </div>
          <div className="nl-bottom-center ">
            <table className="nl-bottom-center-table ">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Phone Number</th>
                  <th>Email</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Approval</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {list.map((data, index) => (
                  <tr key={index}>
                    <td style={{ width: "61px" }}>{data.fullName}</td>
                    <td style={{ width: "150px" }}>{data.phoneNumber}</td>
                    <td style={{ width: "113px" }}>{data.email}</td>
                    <td style={{ width: "110px" }}>{data.followStart}</td>
                    <td style={{ width: "113px" }}>{data.permissionStatus}</td>
                    <td style={{ width: "170px" }}>
                      <a href={data.id} className="button_action">
                        <i className="uil uil-edit edit-icon"></i>
                        Permission
                      </a>
                    </td>
                    <td style={{ width: "128px" }}>
                      <a
                        href={data.id}
                        className="button_action btn-removeData"
                      >
                        <i className="uil uil-edit edit-icon"></i>
                        Delete
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Pagination
            pages={totalPagesNum}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            currentEmployees={list}
            sortedEmployees={followers}
          />
        </div>
      </div>
    </div>
  );
};

export default NewsLetters;
