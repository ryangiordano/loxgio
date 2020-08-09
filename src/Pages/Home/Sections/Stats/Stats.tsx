import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import MainAreaBase from "../MainAreaBase";

//TODO: Put this in a server layer;

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
      {characters.map((c) => {
        return (
          <NavLink
            key={c.id}
            to={`/home/stats/details/${c.id}`}
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            <div className="detail-grid" key={c.name}>
              <div style={{ marginBottom: "2rem" }}>
                <img src={`/images/${c.profilePicture}`} />
              </div>
              <div>
                <h1 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  {c.name}
                </h1>
                <p style={{ padding: 0, margin: 0 }}>
                  Level <span>{c.level}</span> {c.jobTitle}
                </p>
                <div>
                  <p style={{ fontWeight: "bold", padding: 0, margin: 0 }}>
                    HP
                  </p>
                  <div className="hp-bar bar"></div>
                  <p style={{ fontWeight: "bold", padding: 0, margin: 0 }}>
                    MP
                  </p>

                  <div className="mp-bar bar"></div>
                </div>
              </div>
              <div>
                Great
              </div>
            </div>
          </NavLink>
        );
      })}
    </MainAreaBase>
  );
};

export default Stats;
