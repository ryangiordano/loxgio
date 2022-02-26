import LogoDesktop from "Components/Home/LogoDesktop";
import LogoMobile from "Components/Home/LogoMobile";
import React from "react";
import { isMobile } from "react-device-detect";

const Logo = ({ boxRef, firstWordRef, secondWordRef, thirdWordRef }) => {
  return isMobile ? (
    <LogoMobile
      boxRef={boxRef}
      firstWordRef={firstWordRef}
      secondWordRef={secondWordRef}
      thirdWordRef={thirdWordRef}
    />
  ) : (
    <LogoDesktop
      boxRef={boxRef}
      firstWordRef={firstWordRef}
      secondWordRef={secondWordRef}
      thirdWordRef={thirdWordRef}
    />
  );
};
export default Logo;
