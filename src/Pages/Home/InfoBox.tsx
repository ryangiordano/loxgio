import React from "react";
import { theme } from "Styles/theme";

const InfoBox = ({ infoText, style = {} }) => {
  return (
    <div
      style={{
        padding: theme.spacing.giant,
        marginBottom: theme.spacing.giant,
        marginTop: theme.spacing.giant,
        gridColumnStart: "span 2",
        gridRowStart: 2,
        ...style,
      }}
      className="pixel-panel"
    >
      {infoText}
    </div>
  );
};
export default InfoBox;
