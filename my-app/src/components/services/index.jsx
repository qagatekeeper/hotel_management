import React from "react";
import ServiceCard from "./serviceCard";
import "./services.css";

const Services = () => {
  return (
    <div className="servixes-wrapper">
      <div className="container">
        <h3 className="services-header title text-center">Our Services</h3>
        <div className="services-bottom grid">
          <div className="services-bottom-left">
            <ServiceCard
              icon={<i className="uil uil-credit-card"></i>}
              title={"hello"}
            />
          </div>
          <div className="services-bottom-right">
            <ServiceCard
              icon={<i className="uil uil-clock-nine"></i>}
              title={"hello"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
