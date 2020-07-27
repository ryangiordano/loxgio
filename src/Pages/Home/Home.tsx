import React, { useState, useEffect } from "react";
import InfoBox from "./InfoBox";
import SideNav from "./SideNav";
import Stats from "./Sections/Stats/Stats";
import QuestLog from "./Sections/QuestLog";
import Skills from "./Sections/Skills";
import { Route, Redirect } from "react-router-dom";
const GridContainer = ({ children }) => {
  return (
    <div
      className="container"
      style={{
        display: "grid",
        gridGap: "1rem",
        gridTemplateColumns: "1fr 3fr",
        gridTemplateRows: "1rem auto auto auto 1rem",
      }}
    >
      {children}
    </div>
  );
};

const Spacer = (props) => {
  return <div {...props} />;
};

const Home = ({ match }) => {
  const [infoText, setInfoText] = useState("Great job");
  return (
    <GridContainer>
      <Spacer />
      <InfoBox infoText={infoText} />
      <SideNav />
      <Route
        path={`${match.path}/stats`}
        render={() => <Stats setInfoText={setInfoText} />}
        activeClass={"active"}
      />
      <Route
        path={`${match.path}/quests`}
        render={() => <QuestLog setInfoText={setInfoText} />}
        activeClass={"active"}
      />
      <Route
        path={`${match.path}/skills`}
        render={() => <Skills setInfoText={setInfoText} />}
        activeClass={"active"}
      />
      <Redirect to={`${match.path}/stats`} />

      <Spacer />
    </GridContainer>
  );
};
export default Home;
