// import FontIcon from "material-ui/FontIcon";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fromJS } from "immutable";
import { Step, Stepper, StepLabel } from "material-ui/Stepper";
import * as applicationActions from "../actions/ApplicationActions";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Paper from "material-ui/Paper";
import RaisedButton from "material-ui/RaisedButton";
import React, { Component, PropTypes } from "react";
import SwipeableViews from "react-swipeable-views";
import TextField from "material-ui/TextField";

export class ServiceForm extends Component {
 render() {
  const style = {
   margin: 12,
  };
  return (
    <MuiThemeProvider>
      <div className="small-12 medium-12 large-12 large-centered columns">
        <div className="container">
          <Stepper activeStep={2}>
            <Step>
              <StepLabel>{"Nombre de proyecto"}</StepLabel>
            </Step>
            <Step>
              <StepLabel>{"Stack"}</StepLabel>
            </Step>
            <Step>
              <StepLabel>{"DataBase"}</StepLabel>
            </Step>
            <Step>
              <StepLabel>{"Add-ons"}</StepLabel>
            </Step>
          </Stepper>
          <SwipeableViews
              index={1}
          >
            <div>
              <h1 className="align-center">{"Obtenga entornos de trabajo inmediatos con una configuración rápida y lleve a cualquier nivel"}</h1>
              <TextField
                  floatingLabelText={"Nombre del Proyecto"}
                  fullWidth
                  name={"projectName"}
                  type="text"
              />
              <RaisedButton label={"Siguiente"} primary={true} style={style} />
            </div>
            <div>
              <h1 className="align-center">{"Selecciona el Stack que utilizas"}</h1>
              <TextField
                  floatingLabelText={"Nombre del Proyecto"}
                  fullWidth
                  name={"projectName"}
                  type="text"
              />
              <RaisedButton label={"Siguiente"} primary={true} style={style} />
            </div>
          </SwipeableViews>
        </div>
      </div>
    </MuiThemeProvider>
  );
  }
}

ServiceForm.propTypes = {
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
)(ServiceForm);
