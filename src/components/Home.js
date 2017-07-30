import { browserHistory } from "react-router";
import { fromJS } from "immutable";
import { Tabs, Tab } from "material-ui/Tabs";
import AppBar from "material-ui/AppBar";
import DropDownMenu from "material-ui/DropDownMenu";
import FontIcon from "material-ui/FontIcon";
import MenuItem from "material-ui/MenuItem";
import PropTypes from "prop-types";
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
      height: "60px",
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
            id="bgvid"
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
          {/* {formatMessage(intl.referals_section.referals).map((referal,index)=>
            <div key={index}>
              <div className="small-12 medium-10 medium-centered large-8 large-centered columns">
                <p className="quote pdb-2">
                  <FontIcon className={"icon icon-quotes-left"}/>
                  {referal.quote}
                  <FontIcon className={"icon icon-quotes-right "}/>
                </p>
                <RetinaImage
                  src={[
                    formatMessage(referal.image_url),
                    formatMessage(referal.image_url_2x)
                  ]}
                />
                <div className="row links">
                  <FontIcon
                      className="icon icon-office"
                      onClick={()=>onTabClick("http://kiubix.mx/", false)}
                  />
                </div>
                <p className="user">{"Ernesto"}</p>
              </div>
            </div>
          )} */}
          <div>
            <div className="small-12 medium-10 medium-centered large-8 large-centered columns">
              <p className="quote pdb-2"><FontIcon className={"icon icon-quotes-left"}/>{" Tinkerware is a highly recommended company. They have always a lot of disposition and they always exceed expectations. "}<FontIcon className={"icon icon-quotes-right"}/></p>
              <RetinaImage
                  className="company-image"
                  src={[require("../imgs/jorge-silva.png"), require("../imgs/jorge-silva_2x.png")]}
              />
              <div className="row links">
                <FontIcon
                    className="icon icon-office"
                    onClick={()=>onTabClick("http://kiubix.mx/", false)}
                />
                <FontIcon
                    className="icon icon-linkedin"
                    onClick={()=>onTabClick("https://mx.linkedin.com/in/joosiimoo", false)}
                />
              </div>
              <p className="user">{"Jorge Silva"}</p>
            </div>
          </div>
          <div>
            <div className="small-12 medium-10 medium-centered large-8 large-centered columns">
              <p className="quote pdb-2"><FontIcon className={"icon icon-quotes-left"}/>{" It’s great for high standards quality for systems "}<FontIcon className={"icon icon-quotes-right"}/></p>
              <RetinaImage
                  className="company-image"
                  src={[require("../imgs/ana-cecilia.png"), require("../imgs/ana-cecilia_2x.png")]}
              />
              <div className="row links">
                <FontIcon
                    className="icon icon-office"
                    onClick={()=>onTabClick("http://kiubix.mx/", false)}
                />
              </div>
              <p className="user">{"Ana Duran"}</p>
            </div>
          </div>
          <div>
            <div className="small-12 medium-10 medium-centered large-8 large-centered columns">
              <p className="quote pdb-2"><FontIcon className={"icon icon-quotes-left"}/>{" Our sync process is way more agile, fast and efficient! We used to waste hours. Now it takes a few clicks! "}<FontIcon className={"icon icon-quotes-right"}/></p>
              <RetinaImage
                  className="company-image"
                  src={[require("../imgs/juan-carlos.png"), require("../imgs/juan-carlos_2x.png")]}
              />
              <div className="row links">
                <FontIcon
                    className="icon icon-office"
                    onClick={()=>onTabClick("http://kiubix.mx/", false)}
                />
              </div>
              <p className="user">{"Juan Carlos"}</p>
            </div>
          </div>
          <div>
            <div className="small-12 medium-10 medium-centered large-8 large-centered columns">
              <p className="quote pdb-2"><FontIcon className={"icon icon-quotes-left"}/>{" A new and awesome way to create customized development environments for each of our projects! Now we don't suffer for different versions of PHP, MySQL or any of our Test environments or Production "}<FontIcon className={"icon icon-quotes-right"}/></p>
              <RetinaImage
                  className="company-image"
                  src={[require("../imgs/ernesto-troncoso.png"), require("../imgs/ernesto-troncoso_2x.png")]}
              />
              <div className="row links">
                <FontIcon
                    className="icon icon-office"
                    onClick={()=>onTabClick("http://kiubix.mx/", false)}
                />
              </div>
              <p className="user">{"Ernesto"}</p>
            </div>
          </div>
          <div>
            <div className="small-12 medium-10 medium-centered large-8 large-centered columns">
              <p className="quote pdb-2"><FontIcon className={"icon icon-quotes-left"}/>{" We became more agile implementing these methodologies! "}<FontIcon className={"icon icon-quotes-right"}/></p>
              <RetinaImage
                  className="company-image"
                  src={[require("../imgs/ana-cecilia.png"), require("../imgs/ana-cecilia_2x.png")]}
              />
              <div className="row links">
                <FontIcon
                    className="icon icon-office"
                    onClick={()=>onTabClick("http://kiubix.mx/", false)}
                />
              </div>
              <p className="user">{"Ana Duran"}</p>
            </div>
          </div>
        </Slider>
      </div>
      <div className="section-content bg-white">
        <div className="row">
          <div className="small-12 medium-12 large-12 columns pdt-2 pdb-2">
            <h3 className="title pdb-1">{"Are you ready to boost your team performance?"}</h3>
            <RaisedButton
                buttonStyle={styles.raisedButton}
                label="Yes, I am !"
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
                label={"HOME"}
                onClick={()=>onTabClick("/", false)}
            />
            <Tab
                icon={<FontIcon className="icon icon-demo" />}
                label={"DEMO"}
                onClick={()=>onTabClick("/demo", false)}
            />
            <Tab
                icon={<FontIcon className="icon icon-blog" />}
                label={"BLOG"}
                onClick={()=>onTabClick("https://blog.tinkerware.io/", true)}
            />
            <Tab
                icon={<FontIcon className="icon icon-help" />}
                label={"HELP"}
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
            <MenuItem
                label="Language: English"
                primaryText="English"
                value={"en"}
            />
            <MenuItem
                label="Language: Spanish"
                primaryText="Spanish"
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
