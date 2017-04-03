import { Route, IndexRoute } from "react-router";
import App from "../components/App";
import ProvisionerForm from "../containers/ProvisionerForm";
import React from "react";

export default (
  <Route
      component={App}
      path="/"
  >
    <IndexRoute component={ProvisionerForm} />
  </Route>
);
