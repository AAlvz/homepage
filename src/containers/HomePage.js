import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as applicationActions from "../actions/ApplicationActions";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import React, { Component, PropTypes } from "react";
import Steps from "../components/Steps";
import tinkerwareBaseTheme from "../theme/tinkerwareBaseTheme";
import MAILCHIMP_V3 from "mailchimp-v3-api";

let mailchimpAPI = new MAILCHIMP_V3({
  key: "xxxxxxxxxxxxxxx-xxxx",
  debug: true,
  location: "us14"
});

mailchimpAPI
	.get("/lists")
	.then(function(response){
		console.log(response);
	});

export class HomePage extends Component {
 render() {
  const customMuiTheme = getMuiTheme(tinkerwareBaseTheme);
  return (
    <MuiThemeProvider muiTheme={customMuiTheme}>
      <Steps
          applicationActions={this.props.applicationActions}
          applicationAppState={this.props.applicationAppState}
      />
    </MuiThemeProvider>
  );
  }
}

HomePage.propTypes = {
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
)(HomePage);
