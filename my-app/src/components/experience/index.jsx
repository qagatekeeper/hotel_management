import React from "react";
import "./experience.css";
import ExpCard from "./expCard/expCard";
import { cardData } from "../../helpers/data/experienceData.js";
import { Link } from "react-router-dom";

const Experience = () => {
  return (
    <div className="exp-wrapper">
      <div className="exp-title">
        <div>
          <Link to="/reservation" className="exp-link">
            ROOM RESERVATION
          </Link>
        </div>
      </div>
      <div className="exp-content flex absolute-center">
        <div className="container">
          <div className="exp-top">
            <div className="exp-text">
              <span>Experience a good stay, enjoy fantastic offers</span>
              Find our friendly welcoming reception
            </div>
          </div>
          <div className="exp-bottom">
            {cardData.map((data, i) => (
              <ExpCard title={data.title} icon={data.icon} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
