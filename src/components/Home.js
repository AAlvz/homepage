import { browserHistory } from "react-router";
import { fromJS } from "immutable";
import { Tabs, Tab } from "material-ui/Tabs";
import AppBar from "material-ui/AppBar";
import DropDownMenu from "material-ui/DropDownMenu";
import FontIcon from "material-ui/FontIcon";
import MenuItem from "material-ui/MenuItem";
import PropTypes from "prop-types";
import Paper from "material-ui/Paper";
import RaisedButton from "material-ui/RaisedButton";
import React from "react";
import RetinaImage from "./RetinaImage";
import Slider from "react-slick";

const Home = ({ applicationActions, applicationAppState, intl }) => {
  let settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  let sliderCompanies = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false
  };
  let styles = {
    appBar: {
      flexWrap: "wrap",
      position: "fixed",
      top: 0
    },
    appBarIconRight: {
      marginLeft: "-24px"
    },
    paper: {
      color: "rgb(83, 106, 112)",
      display: "inline-block",
      height: "100%",
      marginBottom: "1em",
      marginTop: "1em",
      padding: "0 .5em",
      textAlign: "center",
      width: "100%"
    },
    raisedButtonMenu: {
      lineHeight: "29px",
    },
    raisedButton: {
      fontFamily: "SFText-Bold",
      fontSize: "1.3em !important",
      height: "60px",
      lineHeight: "60px",
      width: 300,
    },
    raisedButtonLabel: {
      fontSize: "1.3em"
    },
    raisedButtonOverlay: {
      height: "60px"
    },
    raisedButtonStyle: {
      margin: ".5em 0"
    },
    pricingRaisedButton: {
      backgroundColor: "rgb(45, 110, 148)"
    },
    footerTab: {
      backgroundColor: "#546A73",
    },
    menuItem: {
      backgroundColor: "#546A73",
    },
    inkTab:{
      backgroundColor: "#546A73",
    },
    tabs: {
      width: "100%"
    },
    tabButton: {
      margin: "0 .9em",
      fontFamily: "SFText-Bold"
    },
    tabRaisedButton: {
      fontFamily: "SFText-Bold",
      height: "20px",
      margin: "0 .9em"
    },
  };
  const handleChangeLanguage = (event, index, value) => {
    applicationActions.setNavigatorLanguage(fromJS({
      navigator_language: value
    }));
  };
  const onTabClick = (url, openBlank) => {
    if(openBlank)
      location.href = url;
    else
      browserHistory.push(url);
  };
  let myTabs = (
    <Tabs style={styles.tabs}>
        <Tab
            buttonStyle={styles.tabButton}
            label={intl.get("menu_home")}
            onActive={()=>onTabClick("/", false)}
            value={0}
        />
        <Tab
            buttonStyle={styles.tabButton}
            label={intl.get("menu_demo")}
            onActive={()=>onTabClick("/demo", false)}
        />
        <Tab
            buttonStyle={styles.tabButton}
            label={intl.get("menu_blog")}
            onActive={()=>onTabClick("https://blog.tinkerware.io/", true)}
        />
        <Tab
            buttonStyle={styles.tabButton}
            label={intl.get("menu_help")}
            onActive={()=>onTabClick("http://help.tinkerware.io/", true)}
        />
        <Tab
            icon={
              <RaisedButton
                  buttonStyle={styles.raisedButtonMenu}
                  label={intl.get("menu_login")}
                  onClick={()=>onTabClick("http://mydevop.tinkerware.io/", true)}
                  secondary
              />}
            style={styles.tabRaisedButton}
        />
    </Tabs>
  );
  return (
    <div>
      <AppBar
          iconElementLeft={
            <span className="icon icon-logo">
              <span className="path1" />
              <span className="path2" />
              <span className="path3" />
              <span className="path4" />
              <span className="path5" />
              <span className="path6" />
              <span className="path7" />
            </span>
          }
          iconElementRight={myTabs}
          iconStyleRight={styles.appBarIconRight}
          onTitleTouchTap={()=>onTabClick("/", false)}
          style={styles.appBar}
          title={<FontIcon className={"icon icon-tinkerware"}/>}
      />
      <div className="align-center header-slider">
        <video
            autoPlay
            loop
            muted
            playsInline
            poster={require("../imgs/Office-Day.jpg")}
        >
          <source
              src={require("../video/Office-Day.webm")}
              type="video/webm"
          />
          <source
              src={require("../video/Office-Day.mp4")}
              type="video/mp4"
          />
        </video>
        <h1 className="align-center pdt-4 title">{intl.get("slider_title")}<br/>{intl.get("slider_title2")}</h1>
        <p className="align-center pdb-2 subtitle">{intl.get("slider_subtitle")}</p>
        <RaisedButton
            buttonStyle={styles.raisedButton}
            className="mb-2"
            label={intl.get("slider_button")}
            labelStyle={styles.raisedButtonLabel}
            onClick={()=>onTabClick("/demo", false)}
            overlayStyle={styles.raisedButtonOverlay}
            secondary
        />
      </div>
      <div className="section-content bg-white pdt-3">
        <h2 className="title pdb-2">{intl.get("integrated_environments_section_title")}</h2>
        <div className="row">
          <div className="small-12 medium-4 large-4 columns how-it-works">
            <RetinaImage
                src={[
                  intl.get("integrated_environments_section_local_image_url"),
                  intl.get("integrated_environments_section_local_image_url_2x")
                ]}
            />
          </div>
          <div className="small-12 medium-4 large-4 columns how-it-works">
            <RetinaImage
                src={[
                  intl.get("integrated_environments_section_test_image_url"),
                  intl.get("integrated_environments_section_test_image_url_2x")
                ]}
            />
          </div>
          <div className="small-12 medium-4 large-4 columns how-it-works">
            <RetinaImage
                src={[
                  intl.get("integrated_environments_section_production_image_url"),
                  intl.get("integrated_environments_section_production_image_url_2x")
                ]}
            />
          </div>
        </div>
      </div>
      <div className="section-bar">
        <div className="row">
          <div className="small-12 medium-12 large-12 columns pdt-3 pdb-3">
            <h3 className="title pdb-1">{intl.get("quotes_section_1_title")}</h3>
            <p className="subtitle">{intl.get("quotes_section_1_subtitle")}</p>
          </div>
        </div>
      </div>
      <div className="section-content bg-white pdt-3 pdb-3">
        <h2 className="title">
          {intl.get("features_section_title")}
          <Slider {...sliderCompanies}>
            <div>{"Facebook"}</div>
            <div>{"Google"}</div>
            <div>{"Netflix"}</div>
            <div>{"Amazon"}</div>
          </Slider>
        </h2>
        <h3 className="subtitle pdb-4">{intl.get("features_section_subtitle")}</h3>
        <div className="row">
          <div className="small-12 medium-4 large-4 columns">
            <FontIcon className={"icon icon-bootstrap"}/>
            <h3 className="icon-title">{intl.get("features_section_features_1_title")}</h3>
            <p className="icon-subtitle">{intl.get("features_section_features_1_subtitle")}</p>
          </div>
          <div className="small-12 medium-4 large-4 columns">
            <FontIcon className={"icon icon-test"}/>
            <h3 className="icon-title">{intl.get("features_section_features_2_title")}</h3>
            <p className="icon-subtitle">{intl.get("features_section_features_2_subtitle")}</p>
          </div>
          <div className="small-12 medium-4 large-4 columns">
            <span className="icon icon-automate">
              <span className="path1"/>
              <span className="path2"/>
              <span className="path3"/>
              <span className="path4"/>
              <span className="path5"/>
              <span className="path6"/>
              <span className="path7"/>
              <span className="path8"/>
              <span className="path9"/>
              <span className="path10"/>
              <span className="path11"/>
              <span className="path12"/>
              <span className="path13"/>
              <span className="path14"/>
              <span className="path15"/>
              <span className="path16"/>
              <span className="path17"/>
            </span>
            <h3 className="icon-title">{intl.get("features_section_features_3_title")}</h3>
            <p className="icon-subtitle">{intl.get("features_section_features_3_subtitle")}</p>
          </div>
        </div>
        <div className="row">
          <div className="small-12 medium-4 large-4 columns">
            <FontIcon className={"icon icon-integrate"}/>
            <h3 className="icon-title">{intl.get("features_section_features_4_title")}</h3>
            <p className="icon-subtitle">{intl.get("features_section_features_4_subtitle")}</p>
          </div>
          <div className="small-12 medium-4 large-4 columns">
            <FontIcon className={"icon icon-upgrade"}/>
            <h3 className="icon-title">{intl.get("features_section_features_5_title")}</h3>
            <p className="icon-subtitle">{intl.get("features_section_features_5_subtitle")}</p>
          </div>
          <div className="small-12 medium-4 large-4 columns">
            <FontIcon className={"icon icon-support"}/>
            <h3 className="icon-title">{intl.get("features_section_features_6_title")}</h3>
            <p className="icon-subtitle">{intl.get("features_section_features_6_subtitle")}</p>
          </div>
        </div>
      </div>
      <div className="section-bar">
        <div className="row">
          <div className="small-12 medium-12 large-12 columns pdt-3 pdb-3">
            <h3 className="title pdb-1">{intl.get("quotes_section_2_title")}</h3>
            <p className="subtitle">{intl.get("quotes_section_2_subtitle")}</p>
          </div>
        </div>
      </div>
      <div className="section-content bg-white pdt-3">
        <h2 className="title pdb-2">{intl.get("how_it_works_section_title")}</h2>
        <div className="row">
          <div className="small-12 medium-4 large-4 columns how-it-works">
            <RetinaImage
                src={[
                  intl.get("how_it_works_section_create_image_url"),
                  intl.get("how_it_works_section_create_image_url_2x")
                ]}
            />
          </div>
          <div className="small-12 medium-4 large-4 columns how-it-works">
            <RetinaImage
                src={[
                  intl.get("how_it_works_section_push_image_url"),
                  intl.get("how_it_works_section_push_image_url_2x")
                ]}
            />
          </div>
          <div className="small-12 medium-4 large-4 columns how-it-works">
            <RetinaImage
                src={[
                  intl.get("how_it_works_section_production_image_url"),
                  intl.get("how_it_works_section_production_image_url_2x")
                ]}
            />
          </div>
        </div>
      </div>
      <div className="section-bar pdt-3 pdb-4 referals">
        <h2 className="title pdb-1">{intl.get("referals_section_title")}</h2>
        <Slider {...settings}>
          <div>
            <div className="small-12 medium-10 medium-centered large-8 large-centered columns">
              <p className="quote pdb-2">
                <FontIcon className={"icon icon-quotes-left"}/>
                {intl.get("referals_section_referal_1_quote")}
                <FontIcon className={"icon icon-quotes-right "}/>
              </p>
              <RetinaImage
                  className="company-image"
                  src={[
                    intl.get("referals_section_referal_1_image_url"),
                    intl.get("referals_section_referal_1_image_url_2x")
                  ]}
              />
              <div className="row links">
                {intl.get("referals_section_referal_1_company_url") != ""?
                  <FontIcon
                      className="icon icon-office"
                      onClick={()=>onTabClick(intl.get("referals_section_referal_1_company_url"), false)}
                  />:""}
                {intl.get("referals_section_referal_1_linkedin") != ""?
                  <FontIcon
                      className="icon icon-linkedin"
                      onClick={()=>onTabClick(intl.get("referals_section_referal_1_linkedin"), false)}
                  />:""}
              </div>
              <p className="user">{intl.get("referals_section_referal_1_client")}</p>
            </div>
          </div>
          <div>
            <div className="small-12 medium-10 medium-centered large-8 large-centered columns">
              <p className="quote pdb-2">
                <FontIcon className={"icon icon-quotes-left"}/>
                {intl.get("referals_section_referal_2_quote")}
                <FontIcon className={"icon icon-quotes-right "}/>
              </p>
              <RetinaImage
                  className="company-image"
                  src={[
                    intl.get("referals_section_referal_2_image_url"),
                    intl.get("referals_section_referal_2_image_url_2x")
                  ]}
              />
              <div className="row links">
                {intl.get("referals_section_referal_2_company_url") != ""?
                  <FontIcon
                      className="icon icon-office"
                      onClick={()=>onTabClick(intl.get("referals_section_referal_2_company_url"), false)}
                  />:""}
                {intl.get("referals_section_referal_2_linkedin") != ""?
                  <FontIcon
                      className="icon icon-linkedin"
                      onClick={()=>onTabClick(intl.get("referals_section_referal_2_linkedin"), false)}
                  />:""}
              </div>
              <p className="user">{intl.get("referals_section_referal_2_client")}</p>
            </div>
          </div>
          <div>
            <div className="small-12 medium-10 medium-centered large-8 large-centered columns">
              <p className="quote pdb-2">
                <FontIcon className={"icon icon-quotes-left"}/>
                {intl.get("referals_section_referal_3_quote")}
                <FontIcon className={"icon icon-quotes-right "}/>
              </p>
              <RetinaImage
                  className="company-image"
                  src={[
                    intl.get("referals_section_referal_3_image_url"),
                    intl.get("referals_section_referal_3_image_url_2x")
                  ]}
              />
              <div className="row links">
                {intl.get("referals_section_referal_3_company_url") != ""?
                  <FontIcon
                      className="icon icon-office"
                      onClick={()=>onTabClick(intl.get("referals_section_referal_3_company_url"), false)}
                  />:""}
                {intl.get("referals_section_referal_3_linkedin") != ""?
                  <FontIcon
                      className="icon icon-linkedin"
                      onClick={()=>onTabClick(intl.get("referals_section_referal_3_linkedin"), false)}
                  />:""}
              </div>
              <p className="user">{intl.get("referals_section_referal_3_client")}</p>
            </div>
          </div>
          <div>
            <div className="small-12 medium-10 medium-centered large-8 large-centered columns">
              <p className="quote pdb-2">
                <FontIcon className={"icon icon-quotes-left"}/>
                {intl.get("referals_section_referal_4_quote")}
                <FontIcon className={"icon icon-quotes-right "}/>
              </p>
              <RetinaImage
                  className="company-image"
                  src={[
                    intl.get("referals_section_referal_4_image_url"),
                    intl.get("referals_section_referal_4_image_url_2x")
                  ]}
              />
              <div className="row links">
                {intl.get("referals_section_referal_4_company_url") != ""?
                  <FontIcon
                      className="icon icon-office"
                      onClick={()=>onTabClick(intl.get("referals_section_referal_4_company_url"), false)}
                  />:""}
                {intl.get("referals_section_referal_4_linkedin") != ""?
                  <FontIcon
                      className="icon icon-linkedin"
                      onClick={()=>onTabClick(intl.get("referals_section_referal_4_linkedin"), false)}
                  />:""}
              </div>
              <p className="user">{intl.get("referals_section_referal_4_client")}</p>
            </div>
          </div>
          <div>
            <div className="small-12 medium-10 medium-centered large-8 large-centered columns">
              <p className="quote pdb-2">
                <FontIcon className={"icon icon-quotes-left"}/>
                {intl.get("referals_section_referal_5_quote")}
                <FontIcon className={"icon icon-quotes-right "}/>
              </p>
              <RetinaImage
                  className="company-image"
                  src={[
                    intl.get("referals_section_referal_5_image_url"),
                    intl.get("referals_section_referal_5_image_url_2x")
                  ]}
              />
              <div className="row links">
                {intl.get("referals_section_referal_5_company_url") != ""?
                  <FontIcon
                      className="icon icon-office"
                      onClick={()=>onTabClick(intl.get("referals_section_referal_5_company_url"), false)}
                  />:""}
                {intl.get("referals_section_referal_5_linkedin") != ""?
                  <FontIcon
                      className="icon icon-linkedin"
                      onClick={()=>onTabClick(intl.get("referals_section_referal_5_linkedin"), false)}
                  />:""}
              </div>
              <p className="user">{intl.get("referals_section_referal_5_client")}</p>
            </div>
          </div>
        </Slider>
      </div>
      <div className="section-content bg-white">
        <div className="row">
          <div className="small-12 medium-12 large-12 columns pdt-2 pdb-2">
            <h3 className="title">{intl.get("pricing")}</h3>
            <h3 className="subtitle pdb-1">{intl.get("pricing_subtitle")}</h3>
          </div>
          <div className="small-up-2 medium-up-3 large-up-5 pdb-2 pricing-list">
            <div className="column column-block pricing">
              <Paper
                  style={styles.paper}
                  zDepth={1}
              >
                <p className="title">{intl.get("pricing_plan_startup")}</p>
                <div className="price-content">
                  <p className="price">{intl.get("pricing_free")}</p>
                </div>
                <p className="subtitle">{intl.get("pricing_project_deploy")}</p>
                <p className="description">{intl.get("pricing_test_in_insolation")}</p>
                <RaisedButton
                    label={intl.get("pricing_start_free")}
                    labelStyle={styles.raisedButtonLabel}
                    overlayStyle={styles.pricingRaisedButton}
                    secondary
                    style={styles.raisedButtonStyle}
                />
              </Paper>
            </div>
            <div className="column column-block pricing">
            <Paper
                style={styles.paper}
                zDepth={1}
            >
              <p className="title">{intl.get("pricing_plan_development")}</p>
              <div className="price-content">
                <p className="price"><span className="symbol">{"$"}</span>{"14.99 USD"}</p>
              </div>
              <p className="subtitle">{intl.get("pricing_free")}</p>
              <p className="description">{intl.get("pricing_cli")}</p>
              <p className="description">{intl.get("pricing_disposable_server")}</p>
              <p className="description">{intl.get("pricing_support_channel")}</p>
              <RaisedButton
                  label={intl.get("pricing_signup_now")}
                  labelStyle={styles.raisedButtonLabel}
                  overlayStyle={styles.pricingRaisedButton}
                  secondary
                  style={styles.raisedButtonStyle}
              />
            </Paper>
            </div>
            <div className="column column-block pricing">
              <Paper
                  style={styles.paper}
                  zDepth={1}
              >
                <p className="title">{intl.get("pricing_plan_medium")}</p>
                <div className="price-content">
                  <p className="price"><span className="symbol">{"$"}</span>{"49.99 USD"}</p>
                </div>
                <p className="subtitle">{intl.get("pricing_agile_project_development")}</p>
                <p className="description">{intl.get("pricing_cli")}</p>
                <p className="description">{intl.get("pricing_disposable_server")}</p>
                <p className="description">{intl.get("pricing_local_environment")}</p>
                <p className="description">{intl.get("pricing_collaborative_teams")}</p>
                <p className="description">{intl.get("pricing_support_channel")}</p>
                <RaisedButton
                    label={intl.get("pricing_signup_now")}
                    labelStyle={styles.raisedButtonLabel}
                    overlayStyle={styles.pricingRaisedButton}
                    secondary
                    style={styles.raisedButtonStyle}
                />
              </Paper>
            </div>
            <div className="column column-block pricing">
              <Paper
                  style={styles.paper}
                  zDepth={1}
              >
                <p className="title">{intl.get("pricing_plan_large")}</p>
                <div className="price-content">
                  <p className="price"><span className="symbol">{"$"}</span>{"199.99 USD"}</p>
                </div>
                <p className="subtitle">{intl.get("pricing_project_team_performance")}</p>
                <p className="description">{intl.get("pricing_cli")}</p>
                <p className="description">{intl.get("pricing_disposable_server")}</p>
                <p className="description">{intl.get("pricing_local_environment")}</p>
                <p className="description">{intl.get("pricing_collaborative_teams")}</p>
                <p className="description">{intl.get("pricing_high_performance")}</p>
                <p className="description">{intl.get("pricing_support_channel")}</p>
                <RaisedButton
                    label={intl.get("pricing_signup_now")}
                    labelStyle={styles.raisedButtonLabel}
                    overlayStyle={styles.pricingRaisedButton}
                    secondary
                    style={styles.raisedButtonStyle}
                />
              </Paper>
            </div>
            <div className="column column-block pricing">
              <Paper
                  style={styles.paper}
                  zDepth={1}
              >
                <p className="title">{intl.get("pricing_plan_enterprise")}</p>
                <div className="price-content">
                  <p className="price"><span className="symbol">{intl.get("pricing_anual_contracts")}</span></p>
                </div>
                <p className="subtitle">{intl.get("pricing_mission_complex_transactional")}</p>
                <p className="description">{intl.get("pricing_cli")}</p>
                <p className="description">{intl.get("pricing_disposable_server")}</p>
                <p className="description">{intl.get("pricing_local_environment")}</p>
                <p className="description">{intl.get("pricing_collaborative_teams")}</p>
                <p className="description">{intl.get("pricing_customized_security")}</p>
                <p className="description">{intl.get("pricing_team_performance_metrics")}</p>
                <p className="description">{intl.get("pricing_24-7_support")}</p>
                <RaisedButton
                    label={intl.get("pricing_signup_now")}
                    labelStyle={styles.raisedButtonLabel}
                    overlayStyle={styles.pricingRaisedButton}
                    secondary
                    style={styles.raisedButtonStyle}
                />
              </Paper>
            </div>
          </div>
          <div className="small-12 medium-12 large-12 columns pdb-2 addons-list">
            <div className="row no-margin columns">
              <div className="small-12 medium-12 large-12 columns addons">
                <div className="small-12 medium-3 large-2 columns">
                  <span className="title">{intl.get("addons")}</span>
                </div>
                <div className="small-12 medium-9 large-10 columns">
                  <div className="row mb-1">
                    <div className="small-12 medium-4 large-4 columns">
                      <span className="addon">{intl.get("addons_additional_users")}</span>
                    </div>
                    <div className="small-12 medium-4 large-4 columns">
                      <span className="addon">{intl.get("addons_automated_test_environment")}</span>
                    </div>
                    <div className="small-12 medium-4 large-4 columns">
                      <span className="addon">{intl.get("addons_monitoring")}</span>
                    </div>
                  </div>
                  <div className="row mb-1">
                    <div className="small-12 medium-4 large-4 columns">
                      <span className="addon">{intl.get("addons_custom_security")}</span>
                    </div>
                    <div className="small-12 medium-4 large-4 columns">
                      <span className="addon">{intl.get("addons_team_performance_metrics")}</span>
                    </div>
                    <div className="small-12 medium-4 large-4 columns">
                      <span className="addon">{intl.get("addons_additional_environments")}</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="small-12 medium-4 large-4 columns">
                      <span className="addon">{intl.get("addons_new_technology")}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-content bg-white">
        <div className="row">
          <div className="small-12 medium-12 large-12 columns pdt-2 pdb-2">
            <h3 className="title pdb-1">{intl.get("are_you_ready_section_title")}</h3>
            <RaisedButton
                buttonStyle={styles.raisedButton}
                label={intl.get("are_you_ready_section_button")}
                labelStyle={styles.raisedButtonLabel}
                onClick={()=>onTabClick("/demo", false)}
                overlayStyle={styles.raisedButtonOverlay}
                secondary
            />
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="row pdt-2 pdb-2">
          <Tabs
              inkBarStyle={styles.inkTab}
              tabItemContainerStyle={styles.footerTab}
          >
            <Tab
                icon={<FontIcon className="icon icon-home" />}
                label={intl.get("menu_home")}
                onClick={()=>onTabClick("/", false)}
            />
            <Tab
                icon={<FontIcon className="icon icon-demo" />}
                label={intl.get("menu_demo")}
                onClick={()=>onTabClick("/demo", false)}
            />
            <Tab
                icon={<FontIcon className="icon icon-blog" />}
                label={intl.get("menu_blog")}
                onClick={()=>onTabClick("https://blog.tinkerware.io/", true)}
            />
            <Tab
                icon={<FontIcon className="icon icon-help" />}
                label={intl.get("menu_help")}
                onClick={()=>onTabClick("http://help.tinkerware.io/", true)}
            />
          </Tabs>
        </div>
        <div className="row">
          <p className="align-center">{"TINKERWARE © 2017. ALL RIGHT RESERVED"}</p>
          <DropDownMenu
              listStyle={styles.menuItem}
              menuItemStyle={styles.menuItem}
              onChange={handleChangeLanguage}
              value={applicationAppState.get("navigator_language")}
          >
            {/* "language": "Lenguage",
            "english": "Inglés",
            "spanish": "Español", */}
            <MenuItem
                label={intl.get("language") + ": " + intl.get("english")}
                primaryText={intl.get("english")}
                value={"en"}
            />
            <MenuItem
                label={intl.get("language") + ": " + intl.get("spanish")}
                primaryText={intl.get("spanish")}
                value={"es"}
            />
          </DropDownMenu>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  applicationActions: PropTypes.object.isRequired,
  applicationAppState: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired
};

export default Home;
