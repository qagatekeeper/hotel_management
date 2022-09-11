import React, { useEffect, useState } from "react";
import "./pagination.css";

const Pagination = ({
  pages,
  setCurrentPage,
  currentPage,
  currentEmployees,
  sortedEmployees,
}) => {
  const numOfPages = [];
  console.log(pages);

  for (let i = 1; i <= pages; i++) {
    numOfPages.push(i);
  }

  const [currentButton, setCurrentButton] = useState(1);

  useEffect(() => {
    setCurrentPage(currentButton);
  }, [currentButton, setCurrentPage]);

  return (
    //  <div className="payment-bottom flex ai-center jc-space-between">
    //       <small>
    //         Showing 1 to {paymentsBody.length} of {paymentsBody.length} entries
    //       </small>
    //       <div className="payment-btn-group">
    //         <button className="button_action payment-firstBTN">Previous</button>
    //         <button className="button_action payment-middleBTN">1</button>
    //         <button className="button_action payment-lastBTN">Next</button>
    //       </div>
    //     </div>
    <div className="payment-bottom flex ai-center jc-space-between">
      <div className="hint-text">
        Showing <b>{currentEmployees.length}</b> out of
        <b> {sortedEmployees.length}</b> entries
      </div>
      <ul className="pagination">
        <li
          className={`button_action previous ${
            currentButton === 1 ? "page-item disabled" : "page-item"
          }`}
        >
          <button
            onClick={() =>
              setCurrentButton((prev) => (prev === 1 ? prev : prev - 1))
            }
          >
            Previous
          </button>
        </li>
        <li className="button_action currentPage">{currentPage}</li>
        <li
          className={`button_action next ${
            currentButton === numOfPages.length
              ? "page-item disabled"
              : "page-item"
          }`}
        >
          <button
            onClick={() =>
              setCurrentButton((next) =>
                next === numOfPages.length ? next : next + 1
              )
            }
          >
            Next
          </button>
        </li>
      </ul>
    </div>
    // <div className="clearfix">
    //   <div className="hint-text">
    //     Showing <b>{currentEmployees.length}</b> out of
    //     <b>{sortedEmployees.length}</b> entries
    //   </div>
    //   <ul className="pagination">
    //     <li
    //       className={`${
    //         currentButton === 1 ? "page-item disabled" : "page-item"
    //       }`}
    //     >
    //       <a
    //         href="#!"
    //         onClick={() =>
    //           setCurrentButton((prev) => (prev === 1 ? prev : prev - 1))
    //         }
    //       >
    //         Previous
    //       </a>
    //     </li>
    //     {numOfPages.map((page, index) => {
    //       return (
    //         <li
    //           key={index}
    //           className={`${
    //             currentButton === page ? "page-item active" : "page-item"
    //           }`}
    //         >
    //           <a
    //             href="#!"
    //             className="page-link"
    //             onClick={() => setCurrentButton(page)}
    //           >
    //             {page}
    //           </a>
    //         </li>
    //       );
    //     })}

    //     <li
    //       className={`${
    //         currentButton === numOfPages.length
    //           ? "page-item disabled"
    //           : "page-item"
    //       }`}
    //     >
    //       <a
    //         href="#!"
    //         onClick={() =>
    //           setCurrentButton((next) =>
    //             next === numOfPages.length ? next : next + 1
    //           )
    //         }
    //       >
    //         Next
    //       </a>
    //     </li>
    //   </ul>
    // </div>
  );
};

export default Pagination;
