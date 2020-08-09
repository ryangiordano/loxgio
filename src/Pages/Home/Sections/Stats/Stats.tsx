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
            to={`/home/stats/details/${c.id}`}
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            <div
              style={{
                display: "grid",
                gridGap: "1rem",
                gridTemplateColumns: "1fr 2fr 3fr",
                gridTemplateRows: "auto",
              }}
              key={c.name}
            >
              <div>
                <img
                  style={{
                    height: "100px",
                  }}
                  src={`/images/${c.profilePicture}`}
                />
              </div>
              <div>{c.name}</div>
              <div>
                {c.links.map((l) => {
                  return <a key={l.url}>{l.url}</a>;
                })}
              </div>
            </div>
          </NavLink>

        );
      })}
    </MainAreaBase>
  );
};

export default Stats;
