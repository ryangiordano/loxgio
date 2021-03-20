import React from "react";
import { theme } from "Styles/theme";

const Divider = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "1px",
        borderTop: `4px solid ${theme.backgroundColor.white}`,
        margin: `${theme.spacing.large} 0`,
      }}
    ></div>
  );
};

export default Divider;
