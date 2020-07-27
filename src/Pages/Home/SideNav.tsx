import React from "react";
import { NavLink } from "react-router-dom";

const SideNavItem = ({ to, text }) => {
  return (
    <li style={{ listStyle: "none" }}>
      <NavLink
        to={to}
        style={{
          color: "white",
          textDecoration: "none",
        }}
      >
        {text}
      </NavLink>
    </li>
  );
};
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
        <SideNavItem to={"/home/stats"} text={"Stats"} />
        <SideNavItem to={"/home/quests"} text={"Quest Log"} />
        <SideNavItem to={"/home/skills"} text={"Skills"} />
        <SideNavItem to={"/"} text={"Title Screen"} />
      </ul>
    </div>
  );
};
export default SideNav;
