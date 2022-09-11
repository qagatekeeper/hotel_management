import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <h3 className="text-center">
        © 2017 SUNRISE . All Rights Reserved | Design by
        <Link to="#about"> SUNRISE</Link>
      </h3>
    </div>
  );
};

export default Footer;
