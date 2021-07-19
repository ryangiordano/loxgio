import Divider from "Components/Divider";
import React from "react";
import { theme } from "Styles/theme";
import { NavLink, useLocation } from "react-router-dom";
import { isMobile } from "react-device-detect";

const SideNavItem = ({
  to,
  text,
  last,
}: {
  to: string;
  text: string;
  last?: boolean;
}) => {
  const l = useLocation();
  const active = l.pathname.includes(to);
  return (
    <li
      style={{
        listStyle: active ? "square " : "none",
        transition: "all .1s",
        transform: active ? `translateX(20px)` : "",
        marginBottom: last ? 0 : theme.spacing.large,
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
      }}
      className="pixel-panel"
    >
      <ul
        className="list-group"
        style={{
          whiteSpace: "nowrap",
        }}
      >
        <SideNavItem to={"/home/stats"} text={"Stats"} />
        <SideNavItem to={"/home/quests"} text={"Quest Log"} />
        <SideNavItem to={"/home/skills"} text={"Skills"} />
        {isMobile ? null : <Divider />}
        <SideNavItem to={"/title"} text={"Title Screen"} last />
      </ul>
    </div>
  );
};
export default SideNav;
