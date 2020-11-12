import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import MainAreaBase from "../MainAreaBase";

const Bar = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  return <div className={`bar ${loaded ? "full" : ""}`}></div>;
};

export const CharacterDetails = ({ character }: { character: Character }) => {
  return (<>
    <h1
      className="title"
      style={{ fontSize: "1.5rem", fontWeight: "bold" }}
    >
      {character.name}
    </h1>
    <p>Level {character.level}</p>
    <p>{character.jobTitle}</p>
  </>)
}

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
            style={{ padding: "1rem" }}
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
                  <img src={`/images/${c.profilePicture}`} />
                </div>

                <div>
                  <CharacterDetails character={c} />
                </div>

                <div>
                  <span style={{ fontWeight: "bold", }}>
                    HP
                    </span>
                  <div className="hp-bar">
                    <Bar />
                  </div>
                  <span style={{ fontWeight: "bold", }}>
                    MP
                    </span>
                  <div className="mp-bar">
                    <Bar />
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
