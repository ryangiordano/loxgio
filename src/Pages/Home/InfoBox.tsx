import React from "react";

const InfoBox = ({ infoText, style = {} }) => {
  return (
    <div
      style={{
        padding: "1rem",
        marginBottom: "1rem",
        marginTop: "1rem",
        gridColumnStart: "span 2",
        gridRowStart: 2,
        ...style
      }}
      className="pixel-panel"
    >
      {infoText}
    </div>
  );
};
export default InfoBox;
