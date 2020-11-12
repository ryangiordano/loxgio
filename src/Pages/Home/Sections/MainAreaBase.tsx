import React from "react";

const MainAreaBase = ({ children, style = {} }) => {
  return (
    <div
      style={{
        padding: "1rem",
        gridColumn: 2,
        gridRowStart: 3,
        ...style
      }}
      className="pixel-panel"
    >
      {children}
    </div>
  );
};
export default MainAreaBase;
