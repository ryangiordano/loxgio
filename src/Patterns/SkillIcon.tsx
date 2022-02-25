import SkillPopover from "Components/Shared/SkillPopover";
import Popover from "Patterns/Popover";
import React from "react";
import { theme } from "Styles/theme";

export const SkillIcon = ({
  name,
  src,
  onClick,
  size = "70px",
  offsetX = 0,
  offsetY = 0,
}: {
  name: string;
  src: string;
  onClick?: (e: any) => void;
  size?: string;
  offsetX?: number;
  offsetY?: number;
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
        onClick: (e) => onClick?.(e),
      }}
      popover={<SkillPopover content={name} />}
    />
  );
};
