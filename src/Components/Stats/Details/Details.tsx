import Divider from "Components/Divider";
import MainAreaBase from "Pages/Home/Sections/MainAreaBase";
import { SkillIcon } from "Patterns/SkillIcon";
import React, { useEffect } from "react";
import { theme } from "Styles/theme";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import WriteIn from "Components/WriteIn";
import CharacterDetails from "Components/Stats/Details/CharacterDetails";
import { CharacterContext } from "State/CharacterContext";
import { isMobile } from "react-device-detect";

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
                <div
                  className={isMobile ? "" : "detail-grid"}
                  style={
                    isMobile
                      ? {
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }
                      : {}
                  }
                >
                  <div>
                    <img
                      draggable="false"
                      src={`/images/${c.profilePicture}`}
                    />
                  </div>

                  <div
                    style={
                      isMobile
                        ? {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }
                        : {}
                    }
                  >
                    <CharacterDetails character={c} />
                    <span
                      style={
                        isMobile
                          ? {
                              marginTop: theme.spacing.giant,
                              fontSize: theme.fontSize.small,
                            }
                          : {}
                      }
                    >
                      {c.email}
                    </span>
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
                <div
                  style={{
                    padding: isMobile ? 0 : theme.spacing.large,
                  }}
                >
                  <p
                    className="long-form"
                    style={
                      isMobile
                        ? {
                            fontSize: theme.fontSize.small,
                          }
                        : {}
                    }
                  >
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
