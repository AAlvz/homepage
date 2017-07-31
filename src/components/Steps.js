import { browserHistory } from "react-router";
import { fromJS } from "immutable";
import { Step, Stepper, StepLabel } from "material-ui/Stepper";
import Addons from "./steps/Addons";
import ContentClear from "material-ui/svg-icons/content/clear";
import DataBases from "./steps/DataBases";
import Email from "./steps/Email";
import FloatingActionButton from "material-ui/FloatingActionButton";
import PropTypes from "prop-types";
import RaisedButton from "material-ui/RaisedButton";
import React from "react";
import Stacks from "./steps/Stacks";
import SwipeableViews from "react-swipeable-views";

const Steps = ( {applicationActions, applicationAppState} ) => {
  const styles = {
    raisedButton: {
      margin: 12
    },
    floatingActionButton: {
      marginTop: ".5em",
      float: "right"
    }
  };
  const handleChangeStep = (value) => {
    applicationActions.setActiveStep(fromJS({
      active_step: value
    }));
  };
  const handleSaveUser = () => {
    applicationActions.requestPostUser(fromJS({
      "email_address": applicationAppState.get("email")?applicationAppState.get("email"):"",
      "status": "subscribed",
      "merge_fields": {
        "STACK": applicationAppState.get("stacks")?applicationAppState.get("stacks").toJS().toString():"",
        "DATABASE": applicationAppState.get("databases")?applicationAppState.get("databases").toJS().toString():"",
        "ADDONS": applicationAppState.get("addons")?applicationAppState.get("addons").toJS().toString():""
      }
    }));
  };
  const onTabClick = (url, openBlank) => {
    if(openBlank)
      location.href = url;
    else
      browserHistory.push(url);
  };
  return (
    <div className="small-12 medium-12 large-12 large-centered columns">
      <FloatingActionButton
          mini
          onTouchTap={()=>onTabClick("/", false)}
          secondary
          style={styles.floatingActionButton}
      >
        <ContentClear />
      </FloatingActionButton>
      <div className="container">
        <Stepper activeStep={applicationAppState.get("active_step")}>
          <Step>
            <StepLabel>{"Frameworks"}</StepLabel>
          </Step>
          <Step>
            <StepLabel>{"Base de Datos"}</StepLabel>
          </Step>
          <Step>
            <StepLabel>{"Complementos"}</StepLabel>
          </Step>
          <Step>
            <StepLabel>{"Ambiente local"}</StepLabel>
          </Step>
        </Stepper>
        <SwipeableViews
            index={applicationAppState.get("active_step")}
        >
          <Stacks
              removeStack={applicationActions.removeStack}
              setActiveStep={handleChangeStep}
              setStack={applicationActions.setStack}
              stacks={applicationAppState.get("stacks")?applicationAppState.get("stacks"):fromJS([])}
              stacksOptions={applicationAppState.getIn(["steps","stacks"])}
          />
          <DataBases
              databases={applicationAppState.get("databases")?applicationAppState.get("databases"):fromJS([])}
              databasesOptions={applicationAppState.getIn(["steps","databases"])}
              removeDatabase={applicationActions.removeDatabase}
              setActiveStep={handleChangeStep}
              setDatabase={applicationActions.setDatabase}
          />
          <Addons
              addons={applicationAppState.get("addons")?applicationAppState.get("addons"):fromJS([])}
              addonsOptions={applicationAppState.getIn(["steps","addons"])}
              removeAddons={applicationActions.removeAddons}
              setActiveStep={handleChangeStep}
              setAddons={applicationActions.setAddons}
          />
          <Email
              email={applicationAppState.get("email")?applicationAppState.get("email"):fromJS("")}
              handleSaveUser={handleSaveUser}
              setActiveStep={handleChangeStep}
              setEmail={applicationActions.setEmail}
          />
          <div className="align-center">
            <h1 className="align-center pdt-3">{"Gracias"}</h1>
            <p className="align-center pdt-2">{"¡Estamos en beta privada, nos pondremos en contacto contigo pronto para que seas mucho más eficiente!"}</p>
            <div className="pdt-5">
              <RaisedButton
                  label={"Go to Home"}
                  onTouchTap={()=>onTabClick("/", false)}
                  primary
                  style={styles.raisedButton}
              />
            </div>
          </div>
        </SwipeableViews>
      </div>
    </div>
  );
};

Steps.propTypes = {
  applicationActions: PropTypes.object.isRequired,
  applicationAppState: PropTypes.object.isRequired
};

export default Steps;
