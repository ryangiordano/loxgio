import MainAreaBase from "Pages/Home/Sections/MainAreaBase";
import Bar from "Patterns/Bar/Bar";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { theme } from "Styles/theme";

export const CharacterDetails = ({ character }: { character: Character }) => {
  return (
    <>
      <h1
        className="title"
        style={{ fontSize: theme.fontSize.large, fontWeight: "bold" }}
      >
        {character.name}
      </h1>
      <p>Level {character.level}</p>
      <p>{character.jobTitle}</p>
    </>
  );
};

const Stats = ({
  setInfoText,
  characters,
}: {
  characters: Character[];
  setInfoText: (t: string) => void;
}) => {
  useEffect(() => {
    setInfoText("Stats");
  }, []);

  return (
    <MainAreaBase>
      {characters.map((c, index) => {
        return (
          <div
            className="pixel-border pixel-border-list-vertical"
            key={c.name}
            style={{ padding: theme.spacing.large }}
          >
            <NavLink
              key={c.id}
              to={`/home/stats/details/${c.id}`}
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              <div className="detail-grid">
                <div style={{ marginBottom: "auto", marginTop: "auto" }}>
                  <img draggable="false" src={`/images/${c.profilePicture}`} />
                </div>

                <div>
                  <CharacterDetails character={c} />
                </div>

                <div>
                  <span style={{ fontWeight: "bold" }}>HP</span>
                  <div style={{ marginBottom: theme.spacing.medium }}>
                    <Bar color={theme.backgroundColor.red} />
                  </div>
                  <span style={{ fontWeight: "bold" }}>MP</span>
                  <div>
                    <Bar color={theme.backgroundColor.blue} />
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
        );
      })}
    </MainAreaBase>
  );
};

export default Stats;
