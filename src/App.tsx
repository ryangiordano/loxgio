import "./App.css";
import React from "react";
import { AnimatePresence } from "framer-motion";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  withRouter,
} from "react-router-dom";
import TitleScreen from "./Pages/TitleScreen";
import Home from "./Pages/Home/Home";

export const Routes = withRouter(({ location }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch>
        <Route path="/" exact component={TitleScreen} />
        <Route path="/home" component={Home} />
      </Switch>
    </AnimatePresence>
  );
});

function App() {
  return (
    <Router>
      <Routes></Routes>
    </Router>
  );
}

export default App;
