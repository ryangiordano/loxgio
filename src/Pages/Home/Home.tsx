import React, { useState, createContext } from "react";
import DataService from "Services/DataService";
import { Switch, Route, Redirect } from "react-router-dom";
import Details from "Pages/Home/Sections/Stats/Details/Details";
import Stats from "Pages/Home/Sections/Stats/Stats";
import QuestLog from "Pages/Home/Sections/QuestLog";
import SideNav from "Pages/Home/SideNav";
import Skills from "Pages/Home/Sections/Skills/Skills";
import InfoBox from "Pages/Home/InfoBox";
import { theme } from "Styles/theme";

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

const Home = ({ match }) => {
  const dataService = new DataService();
  const [characters, setCharacters] = useState(dataService.getAllCharacters());
  const [quests, setQuests] = useState(dataService.getAllQuests());

  const [infoText, setInfoText] = useState("Great job");
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
            <Switch>
              <Route
                path={`${match.path}/stats/details/:characterId`}
                render={(props) => (
                  <Details setInfoText={setInfoText} {...props} />
                )}
              />
              <Route
                path={`${match.path}/stats`}
                render={() => (
                  <Stats characters={characters} setInfoText={setInfoText} />
                )}
              />
              <Route
                path={`${match.path}/quests`}
                render={() => (
                  <QuestLog setInfoText={setInfoText} quests={quests} />
                )}
              />

              <Route
                path={`${match.path}/skills`}
                render={() => (
                  <Skills setInfoText={setInfoText} characters={characters} />
                )}
              />
              <Redirect exact from="" to={`${match.path}/stats`} />
            </Switch>
          </div>
        </div>
      </GridContainer>
    </CharacterContext.Provider>
  );
};
export default Home;
