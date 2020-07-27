import React from "react";

const InfoBox = ({ infoText }) => {
  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: "rgba(0,0,0,.5)",
        gridColumnStart: "span 2",
        gridRowStart: 2,
      }}
    >
      {infoText}
    </div>
  );
};
export default InfoBox;
