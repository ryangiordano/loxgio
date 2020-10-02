import React, { useEffect } from "react";
import { CharacterContext } from "../../../Home";
import MainAreaBase from "../../MainAreaBase";
import { SkillIcon } from "../../Skills/Skills";
import Divider from "../../../../../Components/Divider";

const Details = ({ setInfoText, match }) => {
  useEffect(() => {
    setInfoText("Stats");
  }, []);
  const characterId = match.params.characterId;
  return (
    <MainAreaBase>
      <CharacterContext.Consumer>
        {({ characters }) => {
          const c = characters.find((c) => c.id === Number(characterId));
          if (!c) {
            return null;
          }
          return (
            <div>
              <div className="detail-grid">
                <div>
                  <img src={`/images/${c.profilePicture}`} />
                </div>
                <div>
                  <h1 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                    {c.name}
                  </h1>
                  <p>
                    Level <span>{c.level}</span> {c.jobTitle}
                  </p>
                  <p>{c.email}</p>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {c.skills.map((s) => {
                    return (
                      <div style={{ margin: ".25rem" }}>
                        <SkillIcon
                          src={s.skill.icon}
                          name={s.skill.name}
                          size={"35px"}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              <Divider />

              <div>
                <p className="long-form">{c.details}</p>
              </div>
            </div>
          );
        }}
      </CharacterContext.Consumer>
    </MainAreaBase>
  );
};

export default Details;
