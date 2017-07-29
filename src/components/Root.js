import { Provider } from "react-redux";
import { Router } from "react-router";
import PropTypes from "prop-types";
import React, { Component } from "react";
import routes from "../routes";
import ConnectedIntlProvider from "./ConnectedIntlProvider";

export default class Root extends Component {
  render() {
    const { store, history, logPageView } = this.props;
    return (
      <Provider store={store}>
        <ConnectedIntlProvider>
          <Router
              history={history}
              onUpdate={logPageView}
              routes={routes}
          />
        </ConnectedIntlProvider>
      </Provider>
    );
  }
}

Root.propTypes = {
  history: PropTypes.object.isRequired,
  logPageView: PropTypes.func.isRequired,
  store: PropTypes.object.isRequired
};
