import React from "react";
import { theme } from "Styles/theme";

export default function CharacterDetails({
  character,
}: {
  character: Character;
}) {
  return (
    <>
      <h1 className="title" style={{ fontSize: theme.fontSize.large }}>
        {character.name}
      </h1>
      <p>Level {character.level}</p>
      <p>{character.jobTitle}</p>
    </>
  );
}
