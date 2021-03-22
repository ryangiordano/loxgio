import Divider from "Components/Divider";
import { CharacterContext } from "Pages/Home/Home";
import MainAreaBase from "Pages/Home/Sections/MainAreaBase";
import { CharacterDetails } from "Pages/Home/Sections/Stats/Stats";
import { SkillIcon } from "Patterns/SkillIcon";
import React, { useEffect } from "react";
import { theme } from "Styles/theme";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import WriteIn from "Components/WriteIn";

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

                  <AnimatePresence>
                    <motion.div
                      variants={{
                        hidden: { opacity: 0 },
                        show: {
                          opacity: 1,
                          transition: {
                            staggerChildren: 0.05,
                            delayChildren: 0.3,
                          },
                        },
                      }}
                      initial="hidden"
                      animate="show"
                      style={{ display: "flex", flexWrap: "wrap" }}
                    >
                      {c.skills.map((s) => {
                        return (
                          <motion.div
                            variants={{
                              hidden: { scale: 0, top: 100 },
                              show: { scale: 1, top: 30 },
                            }}
                            key={s.skill.id}
                          >
                            <div
                              style={{
                                margin: theme.spacing.small,
                                position: "relative",
                              }}
                            >
                              <SkillIcon
                                src={s.skill.icon}
                                name={s.skill.name}
                                size={"35px"}
                              />
                            </div>
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  </AnimatePresence>
                </div>
                <Divider />
                <div>
                  <p className="long-form">
                    <WriteIn text={c.details}></WriteIn>
                  </p>
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
