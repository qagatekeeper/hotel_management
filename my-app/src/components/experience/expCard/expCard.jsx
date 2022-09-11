import React from "react";
import "./expCard.css";

const ExpCard = (props) => {
  return (
    <div className="expCard-wrapper flex flex-column absolute-center">
      <div className="expCard-icon">{props.icon}</div>
      <div className="expCard-title">{props.title}</div>
      <div className="expCard-category">SUN RISE</div>
    </div>
  );
};

export default ExpCard;
