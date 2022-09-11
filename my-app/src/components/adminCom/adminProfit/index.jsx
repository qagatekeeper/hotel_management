import "./profit.css";
import { profitBody, profitHeader } from "../../../helpers";
import AdminTitle from "../adminTitle";
import BarChart from "./barChart";
import { useState } from "react";
import Pagination from "../pagination";

const Profit = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [listPerPage, setListPerPage] = useState(10);
  const handleAddrTypeChange = (e) => setListPerPage(e.target.value);

  const indexOfLastEmployee = currentPage * listPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - listPerPage;
  const list = profitBody.slice(indexOfFirstEmployee, indexOfLastEmployee);
  const totalPagesNum = Math.ceil(profitBody.length / listPerPage);
  return (
    <>
      <AdminTitle title="Profit Details" />
      <BarChart data={profitBody} />
      <div className="profit-wrapper flex flex-column gap-3">
        <div className="profit-top flex ai-center jc-space-between">
          <div className="profit-top-left flex ai-center">
            <select name="pages" onChange={handleAddrTypeChange}>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">75</option>
              <option value="100">100</option>
            </select>
            <small>Records per page</small>
          </div>
          <div className="profit-top-right flex ai-center">
            <label>Search:</label>
            <input type="text" autoComplete="Off" name="search" />
          </div>
        </div>
        <div className="profit-center ">
          <table className="profit-center-table ">
            <thead>
              <tr>
                {profitHeader.map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {list.map((data, index) => (
                <tr key={index}>
                  <td style={{ width: "24px" }}>{data.id}</td>
                  <td style={{ width: "174px" }}>{data.name}</td>
                  <td style={{ width: "97px" }}>{data.chechInDate}</td>
                  <td style={{ width: "97px" }}>{data.checkOutDate}</td>
                  <td style={{ width: "100px" }}>$ {data.roomRent}</td>
                  <td style={{ width: "83px" }}>$ {data.bedRent}</td>
                  <td style={{ width: "65px" }}>$ {data.meals}</td>
                  <td style={{ width: "89px" }}>$ {data.grTotal}</td>
                  <td style={{ width: "79px" }}>$ {data.profit}</td>
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
          sortedEmployees={profitBody}
        />
      </div>
    </>
  );
};

export default Profit;
