import { fromJS } from "immutable";
import { Step, Stepper, StepLabel } from "material-ui/Stepper";
import FontIcon from "material-ui/FontIcon";
import RaisedButton from "material-ui/RaisedButton";
import React, { PropTypes } from "react";
import SwipeableViews from "react-swipeable-views";
import ProjectName from "./steps/ProjectName";
import Stacks from "./steps/Stacks";
import DataBases from "./steps/DataBases";

const Steps = ( {applicationActions, applicationAppState} ) => {
  const style = {
   margin: 12,
  };
  const handleChangeStep = (value) => {
    applicationActions.setActiveStep(fromJS({
      active_step: value
    }));
  };
  const handleChangeAddons = (value) => {
    applicationActions.setAddons(fromJS({
      addons: value
    }));
  };
  return (
    <div className="small-12 medium-12 large-12 large-centered columns">
      <div className="container">
        <Stepper activeStep={applicationAppState.get("active_step")}>
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
            <StepLabel>{"Complementos"}</StepLabel>
          </Step>
        </Stepper>
        <SwipeableViews
            index={applicationAppState.get("active_step")}
        >
          <ProjectName
              projectName={applicationAppState.get("project_name")?applicationAppState.get("project_name"):""}
              setActiveStep={handleChangeStep}
              setProjectName={applicationActions.setProjectName}
          />
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
          <div className="align-center">
            <h1 className="align-center">{"Selecciona los Complementos que te gustaría tener"}</h1>
            <ul
                className="pdt-2"
                id="hexGrid"
            >
              <li
                  className="hex"
                  onTouchTap={()=>handleChangeAddons("security")}
              >
                <div className="hexIn">
                  <a
                      className={applicationAppState.get("addons")=="security"?"hexLink active":"hexLink"}
                      href="#"
                  >
                    <FontIcon className={"icon icon-lock"}/>
                    <h2>{"Seguridad"}</h2>
                    <p>{"Módulo de seguridad"}</p>
                  </a>
                </div>
              </li>
              <li
                  className="hex"
                  onTouchTap={()=>handleChangeAddons("backup")}
              >
                <div className="hexIn">
                  <a
                      className={applicationAppState.get("addons")=="backup"?"hexLink active":"hexLink"}
                      href="#"
                  >
                    <FontIcon className={"icon icon-backup"}/>
                    <h2>{"Copias de seguridad"}</h2>
                    <p>{"Módulo de copias de seguridad"}</p>
                  </a>
                </div>
              </li>
              <li
                  className="hex"
                  onTouchTap={()=>handleChangeAddons("scalability")}
              >
                <div className="hexIn">
                  <a
                      className={applicationAppState.get("addons")=="scalability"?"hexLink active":"hexLink"}
                      href="#"
                  >
                    <FontIcon className={"icon icon-scalability"}/>
                    <h2>{"Escalabilidad"}</h2>
                    <p>{"Módulo de escalabilidad"}</p>
                  </a>
                </div>
              </li>
              <li
                  className="hex"
                  onTouchTap={()=>handleChangeAddons("performance")}
              >
                <div className="hexIn">
                  <a
                      className={applicationAppState.get("addons")=="performance"?"hexLink active":"hexLink"}
                      href="#"
                  >
                    <FontIcon className={"icon icon-performance"}/>
                    <h2>{"Rendimiento"}</h2>
                    <p>{"Módulo de rendimiento"}</p>
                  </a>
                </div>
              </li>
              <li
                  className="hex"
                  onTouchTap={()=>handleChangeAddons("")}
              >
                <div className="hexIn">
                  <a
                      className={applicationAppState.get("addons")==""?"hexLink active":"hexLink"}
                      href="#"
                  >
                    <FontIcon className={"icon icon-add"}/>
                    <h2>{"Otro"}</h2>
                    <p>{"Módulo"}</p>
                  </a>
                </div>
              </li>
            </ul>
            <div className="pdt-2">
              <RaisedButton
                  disabled={applicationAppState.get("database")?false:true}
                  label={"Anterior"}
                  onTouchTap={()=>handleChangeStep(2)}
                  primary
                  style={style}
              />
              <RaisedButton
                  disabled={applicationAppState.get("addons")?false:true}
                  label={"Siguiente"}
                  onTouchTap={()=>handleChangeStep(4)}
                  primary
                  style={style}
              />
            </div>
          </div>
          <div className="align-center">
            <h1 className="align-center pdt-5">{"Gracias"}</h1>
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
