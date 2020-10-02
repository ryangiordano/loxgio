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
                    <div className="hp-bar">
                      <Bar />
                    </div>
                    <p style={{ fontWeight: "bold", padding: 0, margin: 0 }}>
                      MP
                    </p>
                    <div className="mp-bar">
                      <Bar />
                    </div>
                  </div>
                </div>
                <div>Great</div>
              </div>
            </NavLink>
          </div>
        );
      })}
    </MainAreaBase>
  );
};

export default Stats;
