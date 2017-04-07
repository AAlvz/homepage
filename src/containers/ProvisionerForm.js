// import FontIcon from "material-ui/FontIcon";
import { fromJS } from "immutable";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as applicationActions from "../actions/ApplicationActions";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Paper from "material-ui/Paper";
import React, { Component, PropTypes } from "react";

export class ServiceForm extends Component {
 render() {
  const handleShowMenuClick = () => {
    this.props.applicationActions.setCircleMenuClick(fromJS({
      "circle_menu_click": !this.props.applicationAppState.get("circle_menu_click")})
    );
  };
  const handleMenuClick = (e, value) => {
    e.preventDefault();
    this.props.applicationActions.setActiveMenu(fromJS({
      "active_menu": value})
    );
    setTimeout(() => {
      this.props.applicationActions.setCircleMenuClick(fromJS({
        "circle_menu_click": false})
      );
      this.props.applicationActions.setActiveMenu(fromJS({
        "active_menu": -1})
      );
    }, 800);
  };
  return (
    <MuiThemeProvider>
      <div className="small-12 medium-12 large-12 large-centered columns">
        <div className="container">
          <Paper zDepth={4}>
            <nav className="oval-menu-wrapper">
              <button
                  className={this.props.applicationAppState.get("circle_menu_click")?"menu-btn clicked":"menu-btn"}
                  id="has-ripple"
                  onClick={handleShowMenuClick}
              >
                <i />
                <i />
                <i />
                <span className="ripple" />
              </button>
              <ul className={this.props.applicationAppState.get("circle_menu_click")?"menu open":"menu"}>
                <li className={this.props.applicationAppState.get("active_menu")==1?"menuitem-wrapper spin":"menuitem-wrapper"}>
                  <div className="icon-holder">
                    <a
                        className="menu-item"
                        href="#"
                        onClick={(e)=>handleMenuClick(e,1)}
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
                <li className={this.props.applicationAppState.get("active_menu")==2?"menuitem-wrapper spin":"menuitem-wrapper"}>
                  <div className="icon-holder">
                    <a
                        className="menu-item"
                        href="#"
                        onClick={(e)=>handleMenuClick(e,2)}
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
                <li className={this.props.applicationAppState.get("active_menu")==3?"menuitem-wrapper spin":"menuitem-wrapper"}>
                  <div className="icon-holder">
                    <a
                        className="menu-item"
                        href="#"
                        onClick={(e)=>handleMenuClick(e,3)}
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
                <li className={this.props.applicationAppState.get("active_menu")==4?"menuitem-wrapper spin":"menuitem-wrapper"}>
                  <div className="icon-holder">
                    <a
                        className="menu-item"
                        href="#"
                        onClick={(e)=>handleMenuClick(e,4)}
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
                <li className={this.props.applicationAppState.get("active_menu")==5?"menuitem-wrapper spin":"menuitem-wrapper"}>
                  <div className="icon-holder">
                    <a
                        className="menu-item"
                        href="#"
                        onClick={(e)=>handleMenuClick(e,5)}
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
          </Paper>
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
