import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as applicationActions from "../actions/ApplicationActions";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import PropTypes from "prop-types";
import React, { Component } from "react";
import Steps from "../components/Steps";
import tinkerwareBaseTheme from "../theme/tinkerwareBaseTheme";

export class StepsPage extends Component {
 render() {
  const customMuiTheme = getMuiTheme(tinkerwareBaseTheme);
  return (
    <div className="row">
      <MuiThemeProvider muiTheme={customMuiTheme}>
        <Steps
            applicationActions={this.props.applicationActions}
            applicationAppState={this.props.applicationAppState}
        />
      </MuiThemeProvider>
    </div>
  );
  }
}

StepsPage.propTypes = {
  applicationActions: PropTypes.object.isRequired,
  applicationAppState: PropTypes.object.isRequired
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
)(StepsPage);
