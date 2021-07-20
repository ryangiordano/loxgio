import Divider from "Components/Divider";
import React from "react";
import { theme } from "Styles/theme";
import { NavLink, useLocation } from "react-router-dom";
import { isMobile } from "react-device-detect";

const DesktopNavItem = ({
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

const MobileSideNavItem = ({ to, text, icon }) => {
  const l = useLocation();
  const active = l.pathname.includes(to);
  return (
    <div
      className="pixel-panel"
      style={{
        padding: theme.spacing.giant,
        display: "block",
        width: "20%",
        backgroundColor: active ? theme.backgroundColor.green : undefined,
      }}
    >
      <NavLink
        to={to}
        style={{
          color: theme.backgroundColor.white,
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          aria-label={text}
          src={`/images/${icon}`}
          style={{ height: "25px", marginLeft: "auto", marginRight: "auto" }}
        />
      </NavLink>
    </div>
  );
};
const SideNav = () => {
  const navItems = [
    { to: "/home/stats", text: "Stats", icon: "stats.png" },
    { to: "/home/quests", text: "Quest Log", icon: "quest.png" },
    { to: "/home/skills", text: "Skills", icon: "skills.png" },
  ];
  const MobileSideNav = () => {
    return (
      <nav style={{ display: "flex", justifyContent: "space-between" }}>
        {navItems.map((n) => {
          return <MobileSideNavItem to={n.to} text={n.text} icon={n.icon} />;
        })}
        <MobileSideNavItem
          to={"/title"}
          text={"Title Screen"}
          icon={"home.png"}
        />
      </nav>
    );
  };
  const DesktopSideNav = () => {
    return (
      <nav
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
          {navItems.map((n) => (
            <DesktopNavItem to={n.to} text={n.text} />
          ))}
          {isMobile ? null : <Divider />}
          <DesktopNavItem to={"/title"} text={"Title Screen"} last />
        </ul>
      </nav>
    );
  };
  return isMobile ? <MobileSideNav /> : <DesktopSideNav />;
};
export default SideNav;
