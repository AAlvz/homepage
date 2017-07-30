import { connect } from "react-redux";
import intl from "react-intl-universal";
import PropTypes from "prop-types";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    let currentLocale = props.locale;
    intl.init({
      currentLocale,
      locales: {
        [currentLocale]: require(`../locales/${currentLocale}`)
      }
    });
  }
  render() {
    return (
      this.props.children
    );
  }
}

App.propTypes = {
  locale: PropTypes.string,
  children: PropTypes.element
};

function mapStateToProps(state) {
  return {
    locale: state.applicationAppState.get("navigator_language")
  };
}

export default connect(mapStateToProps)(App);
