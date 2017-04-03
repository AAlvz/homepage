// import SSHKeys from "../components/provisionerForm/SSHKeys";
import { fromJS } from "immutable";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from "material-ui/Toolbar";
import * as applicationActions from "../actions/ApplicationActions";
import FontIcon from "material-ui/FontIcon";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Paper from "material-ui/Paper";
import RaisedButton from "material-ui/RaisedButton";
import React, { Component, PropTypes } from "react";

const style = {
  button: {
    margin: 12,
  },
  toolbar: {
    margin: "-1em -1em 3em -1em",
  },
  toolbarTitle: {
    marginLeft: "1em"
  }
};

export class ServiceForm extends Component {
  render() {
    const handleCircleMenuClick = () => {
      this.props.applicationActions.setCircleMenuClick(fromJS({
        "circle_menu_click": !this.props.applicationAppState.get("circle_menu_click")}));
    };
    return (
      <MuiThemeProvider>
        <div className="small-12 medium-12 large-12 large-centered columns">
          <div className="container">
            <Paper zDepth={4}>
              <div className="card">
                <Toolbar style={style.toolbar}>
                  <ToolbarGroup firstChild>
                    <FontIcon className="icon icon-project"/>
                    <ToolbarTitle
                        style={style.toolbarTitle}
                        text="Create New Project"
                    />
                  </ToolbarGroup>
                  <ToolbarGroup>
                    <ToolbarSeparator />
                    <RaisedButton
                        href="/projects"
                        icon={<FontIcon className="icon icon-box" />}
                        label={"Projects"}
                        primary
                    />
                  </ToolbarGroup>
                </Toolbar>
                <h2>{"Choose a project name"}</h2>
                <p>{"Give your Droplets an identifying name you will remember them by."}</p>
                <nav className="oval-menu-wrapper">
                  <button
                      className={this.props.applicationAppState.get("circle_menu_click")?'menu-btn clicked':'menu-btn'}
                      id="has-ripple"
                      onClick={handleCircleMenuClick}
                  >
                    <i />
                    <i />
                    <i />
                    <span className="ripple" />
                  </button>
                  <ul className={this.props.applicationAppState.get("circle_menu_click")?'menu open':'menu'}>
                    <li className="menuitem-wrapper">
                      <div className="icon-holder">
                        <a
                            className="menu-item"
                            href="#"
                        >
                          <i className="material-icons">{"home"}</i>
                        </a>
                      </div>
                      <svg className="circle-holder">
                        <circle
                            cx={"50%"}
                            cy={"50%"}
                            fill={"none"}
                            r={"88"}
                        />
                      </svg>
                    </li>
                    <li className="menuitem-wrapper">
                      <div className="icon-holder">
                        <a
                            className="menu-item"
                            href="#"
                        >
                          <i className="material-icons">{"face"}</i>
                        </a>
                      </div>
                      <svg className="circle-holder">
                        <circle
                            cx={"50%"}
                            cy={"50%"}
                            fill={"none"}
                            r={"88"}
                        />
                      </svg>
                    </li>
                    <li className="menuitem-wrapper">
                      <div className="icon-holder">
                        <a
                            className="menu-item"
                            href="#"
                        >
                          <i className="material-icons">{"android"}</i>
                        </a>
                      </div>
                      <svg className="circle-holder">
                        <circle
                            cx={"50%"}
                            cy={"50%"}
                            fill={"none"}
                            r={"88"}
                        />
                      </svg>
                    </li>
                    <li className="menuitem-wrapper">
                      <div className="icon-holder">
                        <a
                            className="menu-item"
                            href="#"
                        >
                          <i className="material-icons">{"shopping_cart"}</i>
                        </a>
                      </div>
                      <svg className="circle-holder">
                        <circle
                            cx={"50%"}
                            cy={"50%"}
                            fill={"none"}
                            r={"88"}
                        />
                      </svg>
                    </li>
                    <li className="menuitem-wrapper">
                      <div className="icon-holder">
                        <a
                            className="menu-item"
                            href="#"
                        >
                          <i className="material-icons">{"room"}</i>
                        </a>
                      </div>
                      <svg className="circle-holder">
                        <circle
                            cx={"50%"}
                            cy={"50%"}
                            fill={"none"}
                            r={"88"}
                        />
                      </svg>
                    </li>
                  </ul>
                </nav>
              </div>
            </Paper>
          </div>
          {/* <div className="row">
          <footer>
          <div className="row">
          <div className="large-12 large-centered medium-12 medium-centered small-12 small-centered columns">
          <p className="copyright">
          {"© 2015, Inc. All rights reserved."}
        </p>
      </div>
    </div>
  </footer>
</div> */}
</div>
</MuiThemeProvider>
);
}
}

ServiceForm.propTypes = {
  applicationActions: PropTypes.object.isRequired
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
