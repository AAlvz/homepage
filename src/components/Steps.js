import { fromJS } from "immutable";
import { Step, Stepper, StepLabel } from "material-ui/Stepper";
import FontIcon from "material-ui/FontIcon";
import RaisedButton from "material-ui/RaisedButton";
import React, { PropTypes } from "react";
import SwipeableViews from "react-swipeable-views";
import TextField from "material-ui/TextField";

const Steps = ( {applicationActions, applicationAppState} ) => {
  const style = {
   margin: 12,
  };
  const handleChangeStep = (value) => {
    applicationActions.setActiveStep(fromJS({
      active_step: value
    }));
  };
  const handleChangeProjectName = (e) => {
    applicationActions.setProjectName(fromJS({
      project_name: e.target.value
    }));
  };
  const handleChangeStack = (value, insert) => {
    if(insert)
      applicationActions.setStack(fromJS({
        stack: value
      }));
    else
      applicationActions.removeStack(fromJS({
        stack: value
      }));
  };
  const handleChangeDatabase = (value) => {
    applicationActions.setDatabase(fromJS({
      database: value
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
          <div className="align-center">
            <h1 className="align-center pdt-2">{"Obtenga entornos de trabajo inmediatos con una configuración rápida y lleve a cualquier nivel"}</h1>
            <TextField
                errorText={applicationAppState.get("project_name")?"":"Este campo es requerido."}
                floatingLabelText={"Nombre del Proyecto"}
                fullWidth
                name={applicationAppState.get("project_name")}
                onChange={handleChangeProjectName}
                type="text"
            />
            <div className="pdt-5">
              <RaisedButton
                  disabled={applicationAppState.get("project_name")?false:true}
                  label={"Siguiente"}
                  onTouchTap={()=>handleChangeStep(1)}
                  primary
                  style={style}
              />
            </div>
          </div>
          <div className="align-center">
            <h1 className="align-center">{"Selecciona el Stack que utilizas"}</h1>
            <ul
                className="pdt-2"
                id="hexGrid"
            >
              <li
                  className="hex"
                  onTouchTap={()=>handleChangeStack("react",
                    applicationAppState.get("stacks")?
                      applicationAppState.get("stacks").findIndex(stack =>
                        stack==="react"
                      )==-1
                    :true
                  )}
              >
                <div className="hexIn">
                    <a
                        className={applicationAppState.get("stacks")?
                          applicationAppState.get("stacks").findIndex(stack =>
                            stack==="react"
                          )==-1?"hexLink":"hexLink active"
                        :"hexLink"}
                        href="#"
                    >
                    <FontIcon className={"icon icon-react"}/>
                    <h2>{"React"}</h2>
                    <p>{"NodeJS"}</p>
                  </a>
                </div>
              </li>
              <li
                  className="hex"
                  onTouchTap={()=>handleChangeStack("erlang")}
              >
                <div className="hexIn">
                  <a
                      className={applicationAppState.get("stack")=="erlang"?"hexLink active":"hexLink"}
                      href="#"
                  >
                    <FontIcon className={"icon icon-erlang"}/>
                    <h2>{"Erlang"}</h2>
                    <p>{"Functional programming language"}</p>
                  </a>
                </div>
              </li>
              <li
                  className="hex"
                  onTouchTap={()=>handleChangeStack("angularjs")}
              >
                <div className="hexIn">
                  <a
                      className={applicationAppState.get("stack")=="angularjs"?"hexLink active":"hexLink"}
                      href="#"
                  >
                    <FontIcon className={"icon icon-angularjs"}/>
                    <h2>{"Angular"}</h2>
                    <p>{"NodeJS"}</p>
                  </a>
                </div>
              </li>
              <li
                  className="hex"
                  onTouchTap={()=>handleChangeStack("django")}
              >
                <div className="hexIn">
                  <a
                      className={applicationAppState.get("stack")=="django"?"hexLink active":"hexLink"}
                      href="#"
                  >
                    <FontIcon className={"icon icon-django"}/>
                    <h2>{"Django"}</h2>
                    <p>{"Python"}</p>
                  </a>
                </div>
              </li>
              <li
                  className="hex"
                  onTouchTap={()=>handleChangeStack("rails")}
              >
                <div className="hexIn">
                  <a
                      className={applicationAppState.get("stack")=="rails"?"hexLink active":"hexLink"}
                      href="#"
                  >
                    <FontIcon className={"icon icon-rails"}/>
                    <h2>{"Rails"}</h2>
                    <p>{"Ruby"}</p>
                  </a>
                </div>
              </li>
              <li
                  className="hex"
                  onTouchTap={()=>handleChangeStack("nodejs")}
              >
                <div className="hexIn">
                  <a
                      className={applicationAppState.get("stack")=="nodejs"?"hexLink active":"hexLink"}
                      href="#"
                  >
                    <FontIcon className={"icon icon-nodejs"}/>
                    <h2>{"NodeJS"}</h2>
                    <p>{"JavaScript environment"}</p>
                  </a>
                </div>
              </li>
              <li
                  className="hex"
                  onTouchTap={()=>handleChangeStack("yii")}
              >
                <div className="hexIn">
                  <a
                      className={applicationAppState.get("stack")=="yii"?"hexLink active":"hexLink"}
                      href="#"
                  >
                    <FontIcon className={"icon icon-yii"}/>
                    <h2>{"Yii"}</h2>
                    <p>{"PHP"}</p>
                  </a>
                </div>
              </li>
              <li
                  className="hex"
                  onTouchTap={()=>handleChangeStack("ember")}
              >
                <div className="hexIn">
                  <a
                      className={applicationAppState.get("stack")=="ember"?"hexLink active":"hexLink"}
                      href="#"
                  >
                    <FontIcon className={"icon icon-ember"}/>
                    <h2>{"Ember"}</h2>
                    <p>{"NodeJS"}</p>
                  </a>
                </div>
              </li>
              <li
                  className="hex"
                  onTouchTap={()=>handleChangeStack("meteor")}
              >
                <div className="hexIn">
                  <a
                      className={applicationAppState.get("stack")=="meteor"?"hexLink active":"hexLink"}
                      href="#"
                  >
                    <FontIcon className={"icon icon-meteor"}/>
                    <h2>{"Meteor"}</h2>
                    <p>{"Javascript"}</p>
                  </a>
                </div>
              </li>
              <li
                  className="hex"
                  onTouchTap={()=>handleChangeStack("")}
              >
                <div className="hexIn">
                  <a
                      className={applicationAppState.get("stack")==""?"hexLink active":"hexLink"}
                      href="#"
                  >
                    <FontIcon className={"icon icon-add"}/>
                    <h2>{"Otro"}</h2>
                    <p>{"Stack"}</p>
                  </a>
                </div>
              </li>
            </ul>
            <div className="pdt-2">
              <RaisedButton
                  disabled={applicationAppState.get("project_name")?false:true}
                  label={"Anterior"}
                  onTouchTap={()=>handleChangeStep(0)}
                  primary
                  style={style}
              />
              <RaisedButton
                  disabled={applicationAppState.get("stack")?false:true}
                  label={"Siguiente"}
                  onTouchTap={()=>handleChangeStep(2)}
                  primary
                  style={style}
              />
            </div>
          </div>
          <div className="align-center">
            <h1 className="align-center">{"Selecciona la Base de Datos que utilizas"}</h1>
            <ul
                className="pdt-2"
                id="hexGrid"
            >
              <li
                  className="hex"
                  onTouchTap={()=>handleChangeDatabase("cassandra")}
              >
                <div className="hexIn">
                  <a
                      className={applicationAppState.get("database")=="cassandra"?"hexLink active":"hexLink"}
                      href="#"
                  >
                    <span className="icon icon-cassandra">
                      <span className="path1"/>
                      <span className="path2"/>
                      <span className="path3"/>
                      <span className="path4"/>
                    </span>
                    <h2>{"Cassandra"}</h2>
                    <p>{"Base de datos clave-valor"}</p>
                  </a>
                </div>
              </li>
              <li
                  className="hex"
                  onTouchTap={()=>handleChangeDatabase("redis")}
              >
                <div className="hexIn">
                  <a
                      className={applicationAppState.get("database")=="redis"?"hexLink active":"hexLink"}
                      href="#"
                  >
                    <FontIcon className={"icon icon-redis"}/>
                    <h2>{"Redis"}</h2>
                    <p>{"Base de datos en memoria"}</p>
                  </a>
                </div>
              </li>
              <li
                  className="hex"
                  onTouchTap={()=>handleChangeDatabase("mongodb")}
              >
                <div className="hexIn">
                  <a
                      className={applicationAppState.get("database")=="mongodb"?"hexLink active":"hexLink"}
                      href="#"
                  >
                    <FontIcon className={"icon icon-mongodb"}/>
                    <h2>{"Mongodb"}</h2>
                    <p>{"Basede datos orientado a documentos"}</p>
                  </a>
                </div>
              </li>
              <li
                  className="hex"
                  onTouchTap={()=>handleChangeDatabase("mysql")}
              >
                <div className="hexIn">
                  <a
                      className={applicationAppState.get("database")=="mysql"?"hexLink active":"hexLink"}
                      href="#"
                  >
                    <FontIcon className={"icon icon-mysql"}/>
                    <h2>{"Mysql"}</h2>
                    <p>{"Base de datos relacional"}</p>
                  </a>
                </div>
              </li>
              <li
                  className="hex"
                  onTouchTap={()=>handleChangeDatabase("postgresql")}
              >
                <div className="hexIn">
                  <a
                      className={applicationAppState.get("database")=="postgresql"?"hexLink active":"hexLink"}
                      href="#"
                  >
                    <FontIcon className={"icon icon-postgresql"}/>
                    <h2>{"Postgresql"}</h2>
                    <p>{"Base de datos relacional"}</p>
                  </a>
                </div>
              </li>
              <li
                  className="hex"
                  onTouchTap={()=>handleChangeDatabase("")}
              >
                <div className="hexIn">
                  <a
                      className={applicationAppState.get("database")==""?"hexLink active":"hexLink"}
                      href="#"
                  >
                    <FontIcon className={"icon icon-add"}/>
                    <h2>{"Otro"}</h2>
                    <p>{"Base de datos"}</p>
                  </a>
                </div>
              </li>
            </ul>
            <div className="pdt-2">
              <RaisedButton
                  disabled={applicationAppState.get("stack")?false:true}
                  label={"Anterior"}
                  onTouchTap={()=>handleChangeStep(1)}
                  primary
                  style={style}
              />
              <RaisedButton
                  disabled={applicationAppState.get("database")?false:true}
                  label={"Siguiente"}
                  onTouchTap={()=>handleChangeStep(3)}
                  primary
                  style={style}
              />
            </div>
          </div>
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
  applicationActions: PropTypes.func.isRequired,
  applicationAppState: PropTypes.object.isRequired
};

export default Steps;
