import React from "react";
import { isMobile } from "react-device-detect";
import MobileSideNav from "Pages/Home/MobileSideNav";
import DesktopSideNav from "Pages/Home/DesktopSideNav";

const SideNav = () => {
  const navItems = [
    { to: "/home/stats", text: "Stats", icon: "stats.png" },
    { to: "/home/quests", text: "Quest Log", icon: "quest.png" },
    { to: "/home/skills", text: "Skills", icon: "skills.png" },
  ];

  return isMobile ? (
    <MobileSideNav navItems={navItems} />
  ) : (
    <DesktopSideNav navItems={navItems} />
  );
};
export default SideNav;
