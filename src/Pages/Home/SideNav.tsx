import Divider from "Components/Divider";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { theme } from "Styles/theme";

const SideNavItem = ({ to, text }) => {
  const l = useLocation();
  const active = l.pathname.includes(to);
  return (
    <li
      style={{
        listStyle: active ? "square " : "none",
        marginBottom: theme.spacing.large,
        transition: "all .1s",
        transform: active ? `translateX(20px)` : "",
      }}
    >
      <NavLink
        to={to}
        style={{
          color: theme.backgroundColor.white,
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
        padding: theme.spacing.large,
        gridColumn: 1,
        gridRowStart: 3,
      }}
      className="pixel-panel"
    >
      <ul className="list-group" style={{ whiteSpace: "nowrap" }}>
        <SideNavItem to={"/home/stats"} text={"Stats"} />
        <SideNavItem to={"/home/quests"} text={"Quest Log"} />
        <SideNavItem to={"/home/skills"} text={"Skills"} />
        <Divider />
        <SideNavItem to={"/title"} text={"Title Screen"} />
      </ul>
    </div>
  );
};
export default SideNav;
