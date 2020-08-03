import React, { useState, useEffect } from "react";
import InfoBox from "./InfoBox";
import SideNav from "./SideNav";
import Stats from "./Sections/Stats/Stats";
import QuestLog from "./Sections/QuestLog";
import Skills from "./Sections/Skills";
import { Route, Redirect, Switch } from "react-router-dom";
import CharacterService from "../../Services/CharacterService";

const GridContainer = ({ children }) => {
  return <div className="container home-grid">{children}</div>;
};

const Spacer = (props) => {
  return <div {...props} />;
};

const Home = ({ match }) => {
  const characterService = new CharacterService();

  const characters = characterService.getAllCharacters();
  const [infoText, setInfoText] = useState("Great job");
  return (
    <GridContainer>
      <Spacer />
      <InfoBox infoText={infoText} />
      <SideNav />

      <Switch>
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

      <Spacer />
    </GridContainer>
  );
};
export default Home;
