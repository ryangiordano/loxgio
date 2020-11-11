import React, { useState, useEffect, createContext } from "react";
import InfoBox from "./InfoBox";
import SideNav from "./SideNav";
import Stats from "./Sections/Stats/Stats";
import QuestLog from "./Sections/QuestLog";
import Skills from "./Sections/Skills/Skills";
import { Route, Redirect, Switch } from "react-router-dom";
import CharacterService from "../../Services/CharacterService";
import Details from "./Sections/Stats/Details/Details";

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
  ) => { },
});

const Home = ({ match }) => {
  const characterService = new CharacterService();
  const [characters, setCharacters] = useState(
    characterService.getAllCharacters()
  );
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
        <InfoBox infoText={infoText} style={{
          marginTop: "1rem"
        }} />
        <div className="d-flex">
          <div style={{ marginRight: "1rem" }}>
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
                render={() => <QuestLog setInfoText={setInfoText} />}
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
