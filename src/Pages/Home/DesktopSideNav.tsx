import React from "react";
import { isMobile } from "react-device-detect";
import { theme } from "Styles/theme";
import { useLocation, NavLink } from "react-router-dom";
import Divider from "Components/Shared/Divider";

function DesktopNavItem({
  to,
  text,
  last,
}: {
  to: string;
  text: string;
  last?: boolean;
}) {
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
}
function DesktopSideNav({
  navItems,
}: {
  navItems: { text: string; to: string; icon: string }[];
}) {
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
          <DesktopNavItem key={n.text} to={n.to} text={n.text} />
        ))}
        {isMobile ? null : <Divider />}
        <DesktopNavItem to={"/title"} text={"Title Screen"} last />
      </ul>
    </nav>
  );
}

export default DesktopSideNav;
