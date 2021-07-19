import React from "react";
import { theme } from "Styles/theme";
import { isMobile } from "react-device-detect";

export default function CharacterDetails({
  character,
}: {
  character: Character;
}) {
  const MobileCharacterDetails = () => {
    return (
      <span style={{ textAlign: "center" }}>
        <h1
          className="title"
          style={{
            fontSize: theme.fontSize.medium,
            marginTop: theme.spacing.large,
          }}
        >
          {character.name}
        </h1>

        <p style={{ fontSize: theme.fontSize.small, margin: 0 }}>
          {character.jobTitle}
        </p>
      </span>
    );
  };

  const DesktopCharacterDetails = () => {
    return (
      <>
        <h1 className="title" style={{ fontSize: theme.fontSize.large }}>
          {character.name}
        </h1>
        <p>Level {character.level}</p>
        <p>{character.jobTitle}</p>
      </>
    );
  };

  return isMobile ? <MobileCharacterDetails /> : <DesktopCharacterDetails />;
}
