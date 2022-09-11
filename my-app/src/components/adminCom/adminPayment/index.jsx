import "./payment.css";
import AdminTitle from "../adminTitle";
import { paymentsHeader, paymentsBody } from "../../../helpers";
import Pagination from "../pagination";
import { useState } from "react";

const Payment = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [listPerPage, setListPerPage] = useState(10);
  const handleAddrTypeChange = (e) => setListPerPage(e.target.value);

  const indexOfLastEmployee = currentPage * listPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - listPerPage;
  const list = paymentsBody.slice(indexOfFirstEmployee, indexOfLastEmployee);
  const totalPagesNum = Math.ceil(paymentsBody.length / listPerPage);

  return (
    <>
      <AdminTitle title="Payment" />
      <div className="payment-wrapper flex flex-column gap-3">
        <div className="payment-top flex ai-center jc-space-between">
          <div className="payment-top-left flex ai-center">
            <select name="pages" onChange={handleAddrTypeChange}>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            <small>Records per page</small>
          </div>
          <div className="payment-top-right flex ai-center">
            <label>Search:</label>
            <input type="text" autoComplete="Off" name="search" />
          </div>
        </div>
        <div className="payment-center ">
          <table className="payment-center-table ">
            <thead>
              <tr>
                {paymentsHeader.map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {list.map((data, index) => (
                <tr key={index}>
                  <td style={{ width: "102px" }}>{data.name}</td>
                  <td style={{ width: "75px" }}>{data.roomType}</td>
                  <td style={{ width: "53px" }}>{data.bedType}</td>
                  <td style={{ width: "58px" }}>{data.chechInDate}</td>
                  <td style={{ width: "58px" }}>{data.checkOutDate}</td>
                  <td style={{ width: "61px" }}>{data.noOfRoom}</td>
                  <td style={{ width: "63px" }}>{data.mealType}</td>
                  <td style={{ width: "65px" }}>{data.roomRent}</td>
                  <td style={{ width: "52px" }}>{data.bedRent}</td>
                  <td style={{ width: "39px" }}>{data.meals}</td>
                  <td style={{ width: "57px" }}>{data.grTotal}</td>
                  <td style={{ width: "71px" }}>
                    <button className="button_action">
                      <i className="uil uil-print"></i>
                      Print
                    </button>
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
          sortedEmployees={paymentsBody}
        />
      </div>
    </>
  );
};

export default Payment;
