import React from "react";
import { theme } from "Styles/theme";

const SkillPopover = ({ content }) => {
  return (
    <div
      className="pixel-panel"
      style={{
        padding: theme.spacing.large,
      }}
    >
      <span>{content}</span>
    </div>
  );
};

export default SkillPopover;
