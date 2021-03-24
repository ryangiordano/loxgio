import { AnimatePresence } from "framer-motion";
import Home from "Pages/Home/Home";
import TitleScreen from "Pages/TitleScreen";
import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

const Routes = withRouter(({ location }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch>
        <Route path="/" exact component={TitleScreen} />
        <Route path="/title" exact component={TitleScreen} />
        <Route path="/home" component={Home} />
      </Switch>
    </AnimatePresence>
  );
});

export default Routes;
