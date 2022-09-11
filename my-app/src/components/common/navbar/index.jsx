import React, { useState } from "react";
import "./navbar.css";
import { menuList } from "../../../helpers/data/navbarData.js";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div className="navbar-wrapper flex absolute-center">
      <div className={`mobile-menu only-mobile ${showMobileMenu && "overlay"}`}>
        <div className="mobile-navbar">
          <ul className="mobile-menu-list">
            {menuList.map((item, index) => (
              <div key={index}>
                <a
                  href={`#${item.name}`}
                  onClick={() => setActive(`${item.name}`)}
                  className={`mobile-nav-item ${
                    active === `${item.name}` ? "activeNavbar" : ""
                  }`}
                >
                  {`${item.name}`}
                </a>
              </div>
            ))}
          </ul>
        </div>
      </div>
      <div className="navbar-container container">
        <div className="navbar flex ai-center jc-space-between">
          <div className="navbar-left">
            <h1 className="navbar-brand">
              <a href="#home">
                SUN
                <span> RISE</span>
                <p className="para">Your Dreamy Resort</p>
              </a>
            </h1>
          </div>
          <div className="navbar-right non-mobile">
            <div className="navbar-menu">
              <ul className="navbar-menu-list flex">
                {menuList.map((item, index) => (
                  <li className="navbar-menu-item" key={index}>
                    <a
                      href={`#${item.name}`}
                      onClick={() => setActive(`${item.name}`)}
                      className={`navbar-menu-link ${
                        active === `${item.name}` ? "activeNavbar" : ""
                      }`}
                    >
                      {`${item.name}`}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="only-mobile mobile-menu-button-wrapper">
            <button
              className={`hamburger hamburger--spin mobile-menu-button ${
                showMobileMenu ? "is-active" : ""
              }`}
              type="button"
              onClick={toggleMobileMenu}
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
