import React from "react";

const TeamList = ({ activeTeb, setActiveTeb, teamImg, name }) => {
  return (
    <>
      <div
        className={`team-tab-item ${
          activeTeb === name ? "team-tab-item-active" : ""
        }`}
        onClick={() => setActiveTeb(name)}
      >
        <img src={teamImg} alt="" className="team-img" />
      </div>
    </>
  );
};

export default TeamList;
