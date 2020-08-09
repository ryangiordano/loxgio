import React from "react";

const InfoBox = ({ infoText }) => {
  return (
    <div
      style={{
        padding: "1rem",
        gridColumnStart: "span 2",
        gridRowStart: 2,
      }}
      className="pixel-panel"
    >
      {infoText}
    </div>
  );
};
export default InfoBox;
