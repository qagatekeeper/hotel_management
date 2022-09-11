import React from "react";
import "./iconGrp.css";

const IconGrp = ({ display }) => {
  return (
    <>
      <div className="pre-navbar-logos flex gap-3 cursor-pointer">
        <div className="pre-navbar-logo flex absolute-center facebook ">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
        </div>
        <div className="pre-navbar-logo absolute-center flex twitter">
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </div>
        <div className="pre-navbar-logo absolute-center flex google">
          <a
            href="https://plus.google.com/u/0/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-google-plus-g"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default IconGrp;
