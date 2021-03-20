import React from "react";
import { theme } from "Styles/theme";

const MainAreaBase = ({ children, style = {} }) => {
  return (
    <div
      style={{
        padding: theme.spacing.large,
        gridColumn: 2,
        gridRowStart: 3,
        ...style,
      }}
      className="pixel-panel"
    >
      {children}
    </div>
  );
};
export default MainAreaBase;
