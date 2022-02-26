import Logo from "Components/Home/Logo";
import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { theme } from "Styles/theme";
import anime from "animejs";
import { isMobile } from "react-device-detect";
import AnimatedWatermark from "Components/Shared/AnimatedWatermark";

function useAnimateIn({
  watermarkRef,
  boxRef,
  firstWordRef,
  secondWordRef,
  thirdWordRef,
}) {
  React.useEffect(() => {
    const tl = anime.timeline();
    tl.add({
      targets: watermarkRef.current,
      opacity: [0, 0.15],
      duration: 300,
      scaleX: [0.8, 1.1],
      scaleY: [0.8, 1.1],
      easing: "easeInOutQuad",
    });
    tl.add({
      targets: watermarkRef.current,
      opacity: [0.15, 0.1],
      duration: 500,
      scaleX: [1.1, 1],
      scaleY: [1.1, 1],
      easing: "easeInOutQuad",
    });

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
  }, [watermarkRef, boxRef, firstWordRef, secondWordRef, thirdWordRef]);
}

const TitleScreen = () => {
  const history = useHistory();
  const navigate = React.useCallback(() => history.push("/home"), [history]);
  React.useEffect(() => {
    document.addEventListener("keydown", navigate);
    return () => {
      document.removeEventListener("keydown", navigate);
    };
  });

  const boxRef = React.useRef(null);
  const firstWordRef = React.useRef(null);
  const secondWordRef = React.useRef(null);
  const thirdWordRef = React.useRef(null);
  const watermarkRef = React.useRef<HTMLImageElement>(null);
  useAnimateIn({
    boxRef,
    firstWordRef,
    secondWordRef,
    thirdWordRef,
    watermarkRef,
  });
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
        <AnimatedWatermark imageRef={watermarkRef} />
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
