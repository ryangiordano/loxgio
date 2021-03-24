import Popover from "Patterns/Popover";
import React from "react";
import { theme } from "Styles/theme";
import SkillPopover from "../Components/SkillPopover";

export const SkillIcon = ({
  name,
  src,
  size = "70px",
  offsetX = 0,
  offsetY = 0,
}) => {
  return (
    <Popover
      trigger={
        <img
          draggable="false"
          alt={name}
          title={name}
          src={`/images/${src}`}
          style={{
            height: "100%",
          }}
        />
      }
      offsetX={offsetX}
      offsetY={offsetY}
      triggerProps={{
        style: {
          height: size,
          width: size,
          backgroundColor: theme.backgroundColor.white,
          padding: theme.spacing.tiny,
          transition: "all .2s",
          transformOrigin: "center center",
        },
        className: "pixel-border",
      }}
      popover={<SkillPopover content={name} />}
    />
  );
};
