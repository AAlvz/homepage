import { Route, IndexRoute } from "react-router";
import App from "../components/App";
import HomePage from "../containers/HomePage";
import React from "react";
import StepsPage from "../containers/StepsPage";

export default (
  <Route
      component={App}
      path="/"
  >
    <IndexRoute component={HomePage} />
    <Route
        component={StepsPage}
        path="/demo"
    />
  </Route>
);
