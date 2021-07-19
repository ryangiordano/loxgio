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
import { CharacterState } from "State/CharacterContext";
import { isMobile } from "react-device-detect";

const GridContainer = ({ children }) => {
  return <div className="container">{children}</div>;
};

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
  const [quests, setQuests] = useState(dataService.getAllQuests());
  const [infoText, setInfoText] = useState("Great job");
  return (
    <CharacterState>
      {({ characters }) => (
        <GridContainer>
          <motion.div {...obj}>
            <InfoBox
              infoText={infoText}
              style={{
                marginTop: theme.spacing.large,
              }}
            />
            <div className={isMobile ? undefined : "d-flex"}>
              <div
                style={{
                  marginRight: isMobile ? undefined : theme.spacing.large,
                  marginBottom: isMobile ? theme.spacing.giant : undefined,
                }}
              >
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
      )}
    </CharacterState>
  );
};
export default Home;
