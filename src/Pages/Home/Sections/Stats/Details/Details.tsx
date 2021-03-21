import Divider from "Components/Divider";
import { CharacterContext } from "Pages/Home/Home";
import MainAreaBase from "Pages/Home/Sections/MainAreaBase";
import { CharacterDetails } from "Pages/Home/Sections/Stats/Stats";
import { SkillIcon } from "Patterns/SkillIcon";
import React, { useEffect } from "react";
import { theme } from "Styles/theme";
import { NavLink } from "react-router-dom";

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
                    <img
                      draggable="false"
                      src={`/images/${c.profilePicture}`}
                    />
                  </div>

                  <div>
                    <CharacterDetails character={c} />
                    <span>{c.email}</span>
                  </div>

                  <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {c.skills.map((s) => {
                      return (
                        <div
                          key={s.skill.id}
                          style={{ margin: theme.spacing.small }}
                        >
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
      <MainAreaBase style={{ marginTop: theme.spacing.giant }}>
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
