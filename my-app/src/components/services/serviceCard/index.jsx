import "./serviceCard.css";
import React from "react";

const ServiceCard = ({ title, icon }) => {
  return (
    <div className="serviceCard-wrapper text-center">
      <div className="serviceCard-icon">{icon}</div>
      <h4 className="serviceCard-title">{title}</h4>
      <p className="serviceCard-description">
        Temporibus autem quibusdam et aut officiis debitis aut rerum
        necessitatibus saepe eveniet ut et voluptates.
      </p>
      <p className="serviceCard-description">
        <i className="uil uil-check"></i>
        Decorated room, proper air conditioned
      </p>
      <p className="serviceCard-description">
        <i className="uil uil-check"></i>Private balcony
      </p>
    </div>
  );
};

export default ServiceCard;
