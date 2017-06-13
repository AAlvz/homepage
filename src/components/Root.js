import { IntlProvider, addLocaleData } from "react-intl";
import { Provider } from "react-redux";
import { Router } from "react-router";
import en from "react-intl/locale-data/en";
import es from "react-intl/locale-data/es";
import PropTypes from "prop-types";
import React, { Component } from "react";
import routes from "../routes";

addLocaleData([...en, ...es]);

export default class Root extends Component {
  render() {
    const { store, history, logPageView } = this.props;
    return (
      <Provider store={store}>
        <IntlProvider>
          <Router
              history={history}
              onUpdate={logPageView}
              routes={routes}
          />
        </IntlProvider>
      </Provider>
    );
  }
}

Root.propTypes = {
  history: PropTypes.object.isRequired,
  logPageView: PropTypes.func.isRequired,
  store: PropTypes.object.isRequired
};
