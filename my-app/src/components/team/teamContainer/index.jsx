import React from "react";
import IconGrp from "../../common/iconGroup";

const TeamContainer = ({
  activeTeb,
  image,
  name,
  position,
  positionDescription,
}) => {
  return (
    <>
      <div
        className={`${
          activeTeb === name
            ? "team-list-container-tab team-list-container-tab-active ai-center "
            : "team-list-container-tab"
        }`}
      >
        <div className="team-list-tab-img">
          <img src={image} alt="" />
        </div>
        <div className="team-info">
          <h4 className="team-info-title">{name}</h4>
          <span className="team-info-post">{position}</span>
          <p className="team-info-para">{positionDescription}</p>
          <div className="social-icons flex">
            <IconGrp />
            <div className="pre-navbar-logo absolute-center flex wifi cursor-pointer">
              <a href="#home" className="pre-navbar-logo flex absolute-center">
                <i className="uil uil-rss"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamContainer;
