import React from "react";

const MainAreaBase = ({ children }) => {
  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: "rgba(0,0,0,.5)",
        gridColumn: 2,
        gridRowStart: 3,
      }}
    >
      {children}
    </div>
  );
};
export default MainAreaBase;
