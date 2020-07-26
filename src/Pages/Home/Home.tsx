import React from "react";
import InfoBox from "./InfoBox";
import SideNav from "./SideNav";
import Stats from "./Stats";
import QuestLog from "./QuestLog";
import Skills from "./Skills";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
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
  console.log(match);
  return (
    <GridContainer>
      <Spacer />
      <InfoBox />
      <SideNav />
      <Route path={`${match.path}/stats`} component={Stats} />
      <Route path={`${match.path}/quests`} component={QuestLog} />
      <Route path={`${match.path}/skills`} component={Skills} />
      <Redirect to={`${match.path}/stats`} />

      <Spacer />
    </GridContainer>
  );
};
export default Home;
