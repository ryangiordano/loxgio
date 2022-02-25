import CharacterDetails from "Components/Stats/Details/CharacterDetails";
import React from "react";
import { theme } from "Styles/theme";
import { isMobile } from "react-device-detect";

export default function CharacterSelector({
  characters,
  onCharacterSelect,
  selectedCharacterId,
}: {
  characters: Character[];
  onCharacterSelect: (characterId: number) => void;
  selectedCharacterId: number;
}) {
  const DesktopCharacterSelector = () => {
    return (
      <div style={{ display: "flex", width: "100%" }}>
        {characters.map((character) => {
          const isActive = selectedCharacterId === character.id;
          return (
            <button
              key={character.name}
              onClick={() => {
                onCharacterSelect(character.id);
              }}
              style={{
                minHeight: "150px",
                backgroundColor: "rgba(0,0,0,0)",
                width: isActive ? "100%" : "100px",
                opacity: isActive ? "1" : ".75",
                textAlign: "left",
                transition: "all .3s",
                display: "flex",
                padding: theme.spacing.medium,
              }}
              className={"pixel-border pixel-border-list-horizontal"}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                  marginRight: theme.spacing.large,
                  height: "100%",
                }}
              >
                <img
                  alt={character.name}
                  draggable="false"
                  src={`/images/${character.profilePicture}`}
                  style={{
                    height: "100%",
                  }}
                />
              </div>
              {isActive ? (
                <div
                  style={{
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    marginLeft: theme.spacing.large,
                  }}
                >
                  <CharacterDetails character={character} />
                </div>
              ) : null}
            </button>
          );
        })}
      </div>
    );
  };

  const MobileCharacterSelector = () => {
    return (
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        {characters.map((character) => {
          const isActive = selectedCharacterId === character.id;
          return (
            <button
              key={character.name}
              onClick={() => {
                onCharacterSelect(character.id);
              }}
              style={{
                backgroundColor: isActive
                  ? theme.backgroundColor.green
                  : "rgba(0,0,0,0)",
                opacity: isActive ? "1" : ".75",
                display: "flex",
                transition: "all .3s",
                alignItems: "center",
              }}
              className={"pixel-border pixel-border-list-vertical"}
            >
              <img
                alt={character.name}
                draggable="false"
                src={`/images/${character.profilePicture}`}
                style={{
                  height: "50px",
                  padding: "5px",
                  marginLeft: "5px",
                }}
              />
              <p
                style={{
                  marginBottom: 0,
                  marginLeft: theme.spacing.large,
                }}
              >
                {character.name}
              </p>
            </button>
          );
        })}
      </div>
    );
  };

  return isMobile ? <MobileCharacterSelector /> : <DesktopCharacterSelector />;
}
