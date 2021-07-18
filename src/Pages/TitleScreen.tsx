import Logo from "Components/Logo";
import React from "react";
import { NavLink } from "react-router-dom";
import { theme } from "Styles/theme";
import anime from "animejs";
import { isMobile } from "react-device-detect";
const TitleScreen = (props) => {
  React.useEffect(() => {
    const tl = anime.timeline();
    [
      boxRef.current,
      firstWordRef.current,
      secondWordRef.current,
      thirdWordRef.current,
    ].forEach((c) => {
      tl.add({
        targets: c,
        opacity: [0, 1],
        duration: 500,
        scaleX: [0.8, 1],
        scaleY: [0.8, 1],
        easing: "easeInOutQuad",
      });
    });
  }, []);
  const boxRef = React.useRef(null);
  const firstWordRef = React.useRef(null);
  const secondWordRef = React.useRef(null);
  const thirdWordRef = React.useRef(null);
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
      <div style={{ width: isMobile ? "80%" : "50%" }}>
        <Logo
          boxRef={boxRef}
          firstWordRef={firstWordRef}
          secondWordRef={secondWordRef}
          thirdWordRef={thirdWordRef}
        />
      </div>
      <NavLink exact to={`/home`}>
        <p
          style={{
            marginTop: "50px",
            color: theme.backgroundColor.blue,
          }}
        >
          Press Any Key
        </p>
      </NavLink>
    </div>
  );
};
export default TitleScreen;
