import React from "react";

const MainAreaBase = ({ children }) => {
  return (
    <div
      style={{
        padding: "1rem",
        gridColumn: 2,
        gridRowStart: 3,
      }}
      className="pixel-panel"
    >
      {children}
    </div>
  );
};
export default MainAreaBase;
