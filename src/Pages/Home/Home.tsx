import React, { useState, createContext } from "react";
import DataService from "Services/DataService";
import { Route, Redirect, useLocation } from "react-router-dom";
import Details from "Components/Stats/Details/Details";
import Stats from "Pages/Home/Sections/Stats/Stats";
import SideNav from "Pages/Home/SideNav";
import Skills from "Pages/Home/Sections/Skills/Skills";
import InfoBox from "Pages/Home/InfoBox";
import { theme } from "Styles/theme";
import { motion } from "framer-motion";
import Quests from "Pages/Home/Quests/Quests";
import { Flip } from "../../Lib/AnimationVariants";

const GridContainer = ({ children }) => {
  return <div className="container">{children}</div>;
};

export const CharacterContext = createContext<{
  characters: Character[];
  setCharacterSkill: (
    characterId: number,
    skillIdToEquip: number,
    skillIdToRemove: number
  ) => void;
}>({
  characters: [],
  setCharacterSkill: (
    characterId: number,
    skillIdToEquip: number,
    skillIdToRemove: number
  ) => {},
});

const obj = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const Home = ({ match }) => {
  const dataService = new DataService();
  const [characters, setCharacters] = useState(dataService.getAllCharacters());
  const [quests, setQuests] = useState(dataService.getAllQuests());
  const [infoText, setInfoText] = useState("Great job");
  const l = useLocation();
  return (
    <CharacterContext.Provider
      value={{
        characters,
        setCharacterSkill: (
          characterId: number,
          skillIdToEquip: number,
          skillIdToRemove: number
        ) => {
          const c = characters.find((cr) => characterId === cr.id);
          if (!c) {
            throw new Error(`Cannot access character at id ${characters}`);
          }
          c.defaultEquippedSkills.splice(
            c.defaultEquippedSkills.findIndex((s) => s === skillIdToRemove),
            1,
            skillIdToEquip
          );
          setCharacters([...characters]);
        },
      }}
    >
      <GridContainer>
        <motion.div {...obj}>
          <InfoBox
            infoText={infoText}
            style={{
              marginTop: theme.spacing.large,
            }}
          />
          <div className="d-flex">
            <div style={{ marginRight: theme.spacing.large }}>
              <SideNav />
            </div>
            <div style={{ flexGrow: 1 }}>
              <Route
                exact
                path={`${match.path}/stats/details/:characterId`}
                render={(props) => (
                  <motion.div {...Flip}>
                    <Details setInfoText={setInfoText} {...props} />
                  </motion.div>
                )}
              />

              <Route exact path={`${match.path}/stats`}>
                <motion.div {...Flip}>
                  <Stats characters={characters} setInfoText={setInfoText} />
                </motion.div>
              </Route>

              <Route path={`${match.path}/quests`}>
                <motion.div {...Flip}>
                  <Quests
                    setInfoText={setInfoText}
                    characters={characters}
                    quests={quests}
                  />
                </motion.div>
              </Route>

              <Route path={`${match.path}/skills`}>
                <motion.div {...Flip}>
                  <Skills setInfoText={setInfoText} characters={characters} />
                </motion.div>
              </Route>
              <Redirect exact from="" to={`${match.path}/stats`} />
            </div>
          </div>
        </motion.div>
      </GridContainer>
    </CharacterContext.Provider>
  );
};
export default Home;
