import React from "react";
import { NavLink } from "react-router-dom";

const TitleScreen = (props) => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      Ryan and Lo
      <NavLink exact to={`/home`}>
        Press Any Key
      </NavLink>
    </div>
  );
};
export default TitleScreen;
