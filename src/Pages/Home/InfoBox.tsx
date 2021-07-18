import WriteIn from "Components/WriteIn";
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
        color: theme.backgroundColor.white,
        ...style,
      }}
      className="pixel-panel"
    >
      <WriteIn text={infoText} speedInMilliseconds={20}></WriteIn>
    </div>
  );
};
export default InfoBox;
