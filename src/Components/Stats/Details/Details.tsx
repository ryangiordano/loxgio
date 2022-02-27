import Divider from "Components/Shared/Divider";
import MainAreaBase from "Pages/Home/Sections/MainAreaBase";
import { SkillIcon } from "Patterns/SkillIcon";
import React, { useContext, useEffect } from "react";
import { theme } from "Styles/theme";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import WriteIn from "Components/Shared/WriteIn";
import CharacterDetails from "Components/Stats/Details/CharacterDetails";
import { CharacterContext } from "State/CharacterContext";
import { isMobile } from "react-device-detect";

const Details = ({ setInfoText, match }) => {
  const { characters } = useContext(CharacterContext);
  useEffect(() => {
    setInfoText("About our stats");
  }, [setInfoText]);

  const characterId = match.params.characterId;
  const c = characters.find((c) => c.id === Number(characterId));

  useEffect(() => {
    setInfoText(`About ${c?.name}`);
  }, [setInfoText, c?.name]);
  if (!c) {
    return null;
  }
  return (
    <>
      <MainAreaBase>
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
                alt={c.name}
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
      </MainAreaBase>

      <MainAreaBase style={{ marginTop: theme.spacing.giant, padding: 0 }}>
        <NavLink
          to={"/home/stats"}
          style={{
            color: "white",
            textDecoration: "none",
            display: "block",
            padding: theme.spacing.large,
          }}
        >
          &#x3c; Back
        </NavLink>
      </MainAreaBase>
    </>
  );
};

export default Details;
