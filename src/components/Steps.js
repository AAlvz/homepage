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

const Steps = ( {applicationActions, applicationAppState, intl} ) => {
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
        "CELLPHONE": applicationAppState.get("cellphone")?applicationAppState.get("cellphone"):"",
        "DATABASE": applicationAppState.get("databases")?applicationAppState.get("databases").toJS().toString():"",
        "ADDONS": applicationAppState.get("addons")?applicationAppState.get("addons").toJS().toString():""
      }
    }));
  };
  const onTabClick = (url, openBlank) => {
    if(url=="/"){
        applicationActions.setStack(fromJS({
          stack: ""
        }));
        applicationActions.setCellphone(fromJS({
          cellphone: ""
        }));
        applicationActions.setStack(fromJS({
          cellphone: ""
        }));
        applicationActions.setDatabase(fromJS({
          database: ""
        }));
        applicationActions.setAddons(fromJS({
          addon: ""
        }));
        applicationActions.setEmail(fromJS({
          email: ""
        }));
        applicationActions.setActiveStep(fromJS({
          active_step: 0
        }));
    }
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
            <StepLabel>{intl.get("frameworks")}</StepLabel>
          </Step>
          <Step>
            <StepLabel>{intl.get("databases")}</StepLabel>
          </Step>
          <Step>
            <StepLabel>{intl.get("addons")}</StepLabel>
          </Step>
          <Step>
            <StepLabel>{intl.get("local_environment")}</StepLabel>
          </Step>
        </Stepper>
        <SwipeableViews
            index={applicationAppState.get("active_step")}
        >
          <Stacks
              intl={intl}
              removeStack={applicationActions.removeStack}
              setActiveStep={handleChangeStep}
              setStack={applicationActions.setStack}
              stacks={applicationAppState.get("stacks")?applicationAppState.get("stacks"):fromJS([])}
              stacksOptions={applicationAppState.getIn(["steps","stacks"])}
          />
          <DataBases
              databases={applicationAppState.get("databases")?applicationAppState.get("databases"):fromJS([])}
              databasesOptions={applicationAppState.getIn(["steps","databases"])}
              intl={intl}
              removeDatabase={applicationActions.removeDatabase}
              setActiveStep={handleChangeStep}
              setDatabase={applicationActions.setDatabase}
          />
          <Addons
              addons={applicationAppState.get("addons")?applicationAppState.get("addons"):fromJS([])}
              addonsOptions={applicationAppState.getIn(["steps","addons"])}
              intl={intl}
              removeAddons={applicationActions.removeAddons}
              setActiveStep={handleChangeStep}
              setAddons={applicationActions.setAddons}
          />
          <Email
              cellphone={applicationAppState.get("cellphone")?applicationAppState.get("cellphone"):fromJS("")}
              email={applicationAppState.get("email")?applicationAppState.get("email"):fromJS("")}
              handleSaveUser={handleSaveUser}
              intl={intl}
              setActiveStep={handleChangeStep}
              setCellphone={applicationActions.setCellphone}
              setEmail={applicationActions.setEmail}
          />
          <div className="align-center steps">
            <p className="align-center pdt-3 title">{intl.get("thanks")}</p>
            <p className="align-center pdt-2 subtitle">
              {intl.get("demo_we_are_in")}
              <strong>{intl.get("demo_private_beta")}</strong>
            </p>
            <p className="align-center subtitle">{intl.get("demo_we_will_contact_you_soon")}</p>
            <div className="pdt-5">
              <RaisedButton
                  label={intl.get("demo_go_to_home")}
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
  applicationAppState: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired
};

export default Steps;
