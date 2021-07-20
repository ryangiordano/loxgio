import CharacterDetails from "Components/Stats/Details/CharacterDetails";
import MainAreaBase from "Pages/Home/Sections/MainAreaBase";
import Bar from "Patterns/Bar/Bar";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { theme } from "Styles/theme";
import { isMobile } from "react-device-detect";

const Stats = ({
  setInfoText,
  characters,
}: {
  characters: Character[];
  setInfoText: (t: string) => void;
}) => {
  useEffect(() => {
    setInfoText("Learn more about our stats");
  }, []);

  const MobileStatsLink = ({ character }) => {
    return (
      <div>
        <div style={{ display: "flex" }}>
          <img
            draggable="false"
            src={`/images/${character.profilePicture}`}
            width="35%"
            style={{ marginLeft: "auto", marginRight: "auto" }}
          />
        </div>

        <div>
          <CharacterDetails character={character} />
        </div>
      </div>
    );
  };

  const DesktopStatsLink = ({ character }) => {
    return (
      <div className="detail-grid">
        <div style={{ marginBottom: "auto", marginTop: "auto" }}>
          <img draggable="false" src={`/images/${character.profilePicture}`} />
        </div>

        <div>
          <CharacterDetails character={character} />
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
    );
  };

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
                color: theme.backgroundColor.white,
                textDecoration: "none",
              }}
            >
              {isMobile ? (
                <MobileStatsLink character={c} />
              ) : (
                <DesktopStatsLink character={c} />
              )}
            </NavLink>
          </div>
        );
      })}
    </MainAreaBase>
  );
};

export default Stats;
