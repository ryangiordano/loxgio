import React, { useEffect } from "react";
import Divider from "../../../../../Components/Divider";
import MainAreaBase from "../../MainAreaBase";
import { CharacterContext } from "../../../Home";
import { SkillIcon } from "../../Skills/Skills";
import { NavLink } from "react-router-dom";
import { CharacterDetails } from "../Stats";

const Details = ({ setInfoText, match }) => {
  useEffect(() => {
    setInfoText("Stats");
  }, []);
  const characterId = match.params.characterId;
  return (
    <>
      <MainAreaBase>
        <CharacterContext.Consumer>
          {({ characters }) => {
            const c = characters.find((c) => c.id === Number(characterId));
            if (!c) {
              return null;
            }
            return (
              <>
                <div className="detail-grid">
                  <div>
                    <img src={`/images/${c.profilePicture}`} />
                  </div>
                  
                  <div>
                    <CharacterDetails character={c} />
                    <span>{c.email}</span>
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
              </>
            );
          }}
        </CharacterContext.Consumer>
      </MainAreaBase>
      <MainAreaBase style={{ marginTop: "1rem" }}>
        <NavLink
          to={"/home/stats"}
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          &#x3c; Back
      </NavLink>
      </MainAreaBase>
    </>
  );
};

export default Details;
