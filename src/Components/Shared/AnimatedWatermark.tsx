import React from "react";
import { isMobile } from "react-device-detect";

function AnimatedWatermark({
  imageRef,
}: {
  imageRef?: React.RefObject<HTMLImageElement>;
}) {
  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        zIndex: -1,
        top: 0,
        left: 0,
        height: "100vh",
        width: "100vw",
        justifyContent: "center",
      }}
    >
      <img
        alt="catshape daruma watermark"
        ref={imageRef}
        src="/images/catshape-daruma.png"
        style={{
          opacity: 0.1,
          alignSelf: "center",
          height: isMobile ? "35%" : "450px",
        }}
      />
    </div>
  );
}
export default AnimatedWatermark;
