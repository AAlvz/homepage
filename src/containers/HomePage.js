import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as applicationActions from "../actions/ApplicationActions";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import PropTypes from "prop-types";
import React, { Component } from "react";
import Home from "../components/Home";
import tinkerwareBaseTheme from "../theme/tinkerwareBaseTheme";
import { intlShape, injectIntl } from "react-intl";

export class HomePage extends Component {
 render() {
  const customMuiTheme = getMuiTheme(tinkerwareBaseTheme);
  const handleFormatMessage = (message) => {
    return this.props.intl.formatMessage({id:message, defaultMessage: message});
  };
  return (
    <MuiThemeProvider muiTheme={customMuiTheme}>
      <Home
          applicationActions={this.props.applicationActions}
          applicationAppState={this.props.applicationAppState}
          formatMessage={handleFormatMessage}
          intl={this.props.intl.messages}
      />
    </MuiThemeProvider>
  );
  }
}

HomePage.propTypes = {
  applicationActions: PropTypes.object.isRequired,
  applicationAppState: PropTypes.object.isRequired,
  intl: intlShape.isRequired,
};

function mapStateToProps(state) {
  return {
   applicationAppState: state.applicationAppState
  };
}

function mapDispatchToProps(dispatch) {
  return {
   applicationActions: bindActionCreators(applicationActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(HomePage));
