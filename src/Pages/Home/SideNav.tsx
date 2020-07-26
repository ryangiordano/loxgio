import React from "react";
import { NavLink } from "react-router-dom";

const SideNav = (props) => {
  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: "rgba(0,0,0,.5)",
        gridColumn: 1,
        gridRowStart: 3,
      }}
    >
      <ul className="list-group">
        <li className="list-group-item">
          <NavLink to={`/home/stats`}>Stats</NavLink>
        </li>
        <li className="list-group-item">
          <NavLink to={`/home/quests`}>Quest Log</NavLink>
        </li>
        <li className="list-group-item">
          <NavLink to={`/home/skills`}>Skills</NavLink>
        </li>
        <li className="list-group-item">
          <NavLink to={`/`}>Title Screen</NavLink>
        </li>
      </ul>
    </div>
  );
};
export default SideNav;
