// import FontIcon from "material-ui/FontIcon";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fromJS } from "immutable";
import { Step, Stepper, StepLabel } from "material-ui/Stepper";
import { white } from "material-ui/styles/colors";
import * as applicationActions from "../actions/ApplicationActions";
import FontIcon from "material-ui/FontIcon";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Paper from "material-ui/Paper";
import RaisedButton from "material-ui/RaisedButton";
import React, { Component, PropTypes } from "react";
import SwipeableViews from "react-swipeable-views";
import TextField from "material-ui/TextField";
import tinkerwareBaseTheme from "../theme/tinkerwareBaseTheme";

export class ServiceForm extends Component {
 render() {
  const style = {
   margin: 12,
  };
  const customMuiTheme = getMuiTheme(tinkerwareBaseTheme);
  return (
    <MuiThemeProvider muiTheme={customMuiTheme}>
      <div className="small-12 medium-12 large-12 large-centered columns">
        {console.log(customMuiTheme)}
        <div className="container">
          <Stepper activeStep={3}>
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
              index={3}
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
              <ul id="hexGrid">
                <li className="hex">
                  <div className="hexIn">
                    <a className="hexLink" href="#">
                      <FontIcon className={"icon icon-react"}/>
                      <h2>{"React"}</h2>
                      <p>{"NodeJS"}</p>
                    </a>
                  </div>
                </li>
                <li className="hex">
                  <div className="hexIn">
                    <a className="hexLink" href="#">
                      <FontIcon className={"icon icon-erlang"}/>
                      <h2>{"Erlang"}</h2>
                      <p>{"Functional programming language"}</p>
                    </a>
                  </div>
                </li>
                <li className="hex">
                  <div className="hexIn">
                    <a className="hexLink" href="#">
                      <FontIcon className={"icon icon-angularjs"}/>
                      <h2>{"Angular"}</h2>
                      <p>{"NodeJS"}</p>
                    </a>
                  </div>
                </li>
                <li className="hex">
                  <div className="hexIn">
                    <a className="hexLink" href="#">
                      <FontIcon className={"icon icon-django"}/>
                      <h2>{"Django"}</h2>
                      <p>{"Python"}</p>
                    </a>
                  </div>
                </li>
                <li className="hex">
                  <div className="hexIn">
                    <a className="hexLink" href="#">
                      <FontIcon className={"icon icon-rails"}/>
                      <h2>{"Rails"}</h2>
                      <p>{"Ruby"}</p>
                    </a>
                  </div>
                </li>
                <li className="hex">
                  <div className="hexIn">
                    <a className="hexLink" href="#">
                      <FontIcon className={"icon icon-nodejs"}/>
                      <h2>{"NodeJS"}</h2>
                      <p>{"JavaScript environment"}</p>
                    </a>
                  </div>
                </li>
                <li className="hex">
                  <div className="hexIn">
                    <a className="hexLink" href="#">
                      <FontIcon className={"icon icon-yii"}/>
                      <h2>{"Yii"}</h2>
                      <p>{"PHP"}</p>
                    </a>
                  </div>
                </li>
                <li className="hex">
                  <div className="hexIn">
                    <a className="hexLink" href="#">
                      <FontIcon className={"icon icon-ember"}/>
                      <h2>{"Ember"}</h2>
                      <p>{"NodeJS"}</p>
                    </a>
                  </div>
                </li>
                <li className="hex">
                  <div className="hexIn">
                    <a className="hexLink" href="#">
                      <FontIcon className={"icon icon-meteor"}/>
                      <h2>{"Meteor"}</h2>
                      <p>{"Javascript"}</p>
                    </a>
                  </div>
                </li>
              </ul>
              <RaisedButton label={"Siguiente"} primary={true} style={style} />
            </div>
            <div>
              <h1 className="align-center">{"Selecciona la Base de Datos que utilizas"}</h1>
              <ul id="hexGrid">
                <li className="hex">
                  <div className="hexIn">
                    <a className="hexLink" href="#">
                      <span className="icon icon-cassandra">
                        <span className="path1"></span>
                        <span className="path2"></span>
                        <span className="path3"></span>
                        <span className="path4"></span>
                      </span>
                      <h2>{"Cassandra"}</h2>
                      <p>{"Base de datos clave-valor"}</p>
                    </a>
                  </div>
                </li>
                <li className="hex">
                  <div className="hexIn">
                    <a className="hexLink" href="#">
                      <FontIcon className={"icon icon-redis"}/>
                      <h2>{"Redis"}</h2>
                      <p>{"Base de datos en memoria"}</p>
                    </a>
                  </div>
                </li>
                <li className="hex">
                  <div className="hexIn">
                    <a className="hexLink" href="#">
                      <FontIcon className={"icon icon-mongodb"}/>
                      <h2>{"Mongodb"}</h2>
                      <p>{"Basede datos orientado a documentos"}</p>
                    </a>
                  </div>
                </li>
                <li className="hex">
                  <div className="hexIn">
                    <a className="hexLink" href="#">
                      <FontIcon className={"icon icon-mysql"}/>
                      <h2>{"Mysql"}</h2>
                      <p>{"Base de datos relacional"}</p>
                    </a>
                  </div>
                </li>
                <li className="hex">
                  <div className="hexIn">
                    <a className="hexLink" href="#">
                      <FontIcon className={"icon icon-postgresql"}/>
                      <h2>{"Postgresql"}</h2>
                      <p>{"Base de datos relacional"}</p>
                    </a>
                  </div>
                </li>
              </ul>
              <RaisedButton label={"Siguiente"} primary={true} style={style} />
            </div>
            <div>
              <h1 className="align-center">{"Selecciona los Complementos que te gustaría tener"}</h1>
              <ul id="hexGrid">
                <li className="hex">
                  <div className="hexIn">
                    <a className="hexLink" href="#">
                      <span className="icon icon-cassandra">
                        <span className="path1"></span>
                        <span className="path2"></span>
                        <span className="path3"></span>
                        <span className="path4"></span>
                      </span>
                      <h2>{"Cassandra"}</h2>
                      <p>{"Base de datos clave-valor"}</p>
                    </a>
                  </div>
                </li>
                <li className="hex">
                  <div className="hexIn">
                    <a className="hexLink" href="#">
                      <FontIcon className={"icon icon-redis"}/>
                      <h2>{"Redis"}</h2>
                      <p>{"Base de datos en memoria"}</p>
                    </a>
                  </div>
                </li>
                <li className="hex">
                  <div className="hexIn">
                    <a className="hexLink" href="#">
                      <FontIcon className={"icon icon-mongodb"}/>
                      <h2>{"Mongodb"}</h2>
                      <p>{"Basede datos orientado a documentos"}</p>
                    </a>
                  </div>
                </li>
                <li className="hex">
                  <div className="hexIn">
                    <a className="hexLink" href="#">
                      <FontIcon className={"icon icon-mysql"}/>
                      <h2>{"Mysql"}</h2>
                      <p>{"Base de datos relacional"}</p>
                    </a>
                  </div>
                </li>
              </ul>
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
