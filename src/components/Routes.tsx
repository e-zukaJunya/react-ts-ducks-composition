import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./home/HomeCont";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      {/* <Route>404のっとふぁうんど</Route> */}
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
