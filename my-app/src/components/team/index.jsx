import React, { useState } from "react";
import "./team.css";
import TeamList from "./teamList";
import TeamContainer from "./teamContainer";

import { teamlist, teamContainerData } from "../../helpers/data/teamData.js";

const Team = () => {
  const [activeTeb, setActiveTeb] = useState("Lucas Jimenez");
  return (
    <div className="team-wrapper" id="team">
      <div className="container text-center">
        <h1 className="title">Meet Our Team</h1>
        <div className="team-tab-list">
          {teamlist.map((teamData, index) => (
            <TeamList
              activeTeb={activeTeb}
              setActiveTeb={setActiveTeb}
              teamImg={teamData.img}
              name={teamData.name}
              key={index}
            />
          ))}
        </div>
        <div className="team-list-container">
          {teamContainerData.map((teamLeaderData, index) => (
            <TeamContainer
              activeTeb={activeTeb}
              image={teamLeaderData.teamLeaderImage}
              name={teamLeaderData.teamLeaderName}
              position={teamLeaderData.teamLeaderPosition}
              positionDescription={teamLeaderData.teamLeaderPositionDescription}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
