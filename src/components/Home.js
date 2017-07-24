import { browserHistory } from "react-router";
import { Tabs, Tab } from "material-ui/Tabs";
import AppBar from "material-ui/AppBar";
import FontIcon from "material-ui/FontIcon";
import Paper from "material-ui/Paper";
import RaisedButton from "material-ui/RaisedButton";
import React from "react";
import RetinaImage from "./RetinaImage";
import Slider from "react-slick";

const Home = () => {
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
            label="Home"
            onActive={()=>onTabClick("/", false)}
            value={0}
        />
        <Tab
            buttonStyle={styles.tabButton}
            label="Demo"
            onActive={()=>onTabClick("/demo", false)}
        />
        <Tab
            buttonStyle={styles.tabButton}
            label="Blog"
            onActive={()=>onTabClick("https://blog.tinkerware.io/", true)}
        />
        <Tab
            buttonStyle={styles.tabButton}
            label="Help"
            onActive={()=>onTabClick("http://help.tinkerware.io/", true)}
        />
        <Tab
            icon={
              <RaisedButton
                  buttonStyle={styles.raisedButtonMenu}
                  label="Login"
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
        <h1 className="align-center pdt-4 title">{"The perfect DevOps automation platform"}<br/>{"for software development teams"}</h1>
        <p className="align-center pdb-2 subtitle">{"Focus on development. We handle operations."}</p>
        <RaisedButton
            buttonStyle={styles.raisedButton}
            className="mb-2"
            label="Become Efficient Now"
            labelStyle={styles.raisedButtonLabel}
            onClick={()=>onTabClick("/demo", false)}
            overlayStyle={styles.raisedButtonOverlay}
            secondary
        />
      </div>
      <div className="section-content bg-white pdt-3">
        <h2 className="title pdb-2">{"Get instant environments"}</h2>
        <div className="row">
          <div className="small-12 medium-4 large-4 columns how-it-works">
            <RetinaImage
                src={[require("../imgs/development-environment.png"), require("../imgs/development-environment_2x.png")]}
            />
          </div>
          <div className="small-12 medium-4 large-4 columns how-it-works">
            <RetinaImage
                src={[require("../imgs/test-environment.png"), require("../imgs/test-environment_2x.png")]}
            />
          </div>
          <div className="small-12 medium-4 large-4 columns how-it-works">
            <RetinaImage
                src={[require("../imgs/production-environment.png"), require("../imgs/production-environment_2x.png")]}
            />
          </div>
        </div>
      </div>
      <div className="section-bar">
        <div className="row">
          <div className="small-12 medium-12 large-12 columns pdt-3 pdb-3">
            <h3 className="title pdb-1">{"Become Agile now!"}</h3>
            <p className="subtitle">{"React fast against changes to increment your income"}</p>
          </div>
        </div>
      </div>
      <div className="section-content bg-white pdt-3 pdb-3">
        <h2 className="title">{"Be as productive as"}
          <Slider {...sliderCompanies}>
            <div>{"Facebook"}</div>
            <div>{"Google"}</div>
            <div>{"Netflix"}</div>
            <div>{"Amazon"}</div>
          </Slider>
        </h2>
        <h3 className="subtitle pdb-4">{"Boost your team performance using DevOps tools"}</h3>
        <div className="row">
          <div className="small-12 medium-4 large-4 columns">
            <FontIcon className={"icon icon-bootstrap"}/>
            <h3 className="icon-title">{"Bootstrap your project"}</h3>
            <p className="icon-subtitle">{"Select your framework, databases and services and start to develop instantly."}</p>
          </div>
          <div className="small-12 medium-4 large-4 columns">
            <FontIcon className={"icon icon-test"}/>
            <h3 className="icon-title">{"Test instantly"}</h3>
            <p className="icon-subtitle">{"Deploy new features to a provided QA environment and test them immediately."}</p>
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
            <h3 className="icon-title">{"Automate everything"}</h3>
            <p className="icon-subtitle">{"Need CI? Certificates? Security? We take care of them for you."}</p>
          </div>
        </div>
        <div className="row">
          <div className="small-12 medium-4 large-4 columns">
            <FontIcon className={"icon icon-integrate"}/>
            <h3 className="icon-title">{"Integrate quickly"}</h3>
            <p className="icon-subtitle">{"Test locally and in the cloud to publish new features without hassle."}</p>
          </div>
          <div className="small-12 medium-4 large-4 columns">
            <FontIcon className={"icon icon-upgrade"}/>
            <h3 className="icon-title">{"Upgrade anytime"}</h3>
            <p className="icon-subtitle">{"Need a bigger QA environment? Need to handle more traffic? Just one click away."}</p>
          </div>
          <div className="small-12 medium-4 large-4 columns">
            <FontIcon className={"icon icon-support"}/>
            <h3 className="icon-title">{"Superhuman Support"}</h3>
            <p className="icon-subtitle">{"We can help you to integrate DevOps tools in your workflow. And we are available at anytime."}</p>
          </div>
        </div>
      </div>
      <div className="section-bar">
        <div className="row">
          <div className="small-12 medium-12 large-12 columns pdt-3 pdb-3">
            <h3 className="title pdb-1">{"Don't Deploy. Replicate!"}</h3>
            <p className="subtitle">{"Get instant working environments with Fast setup and take it to any level"}</p>
          </div>
        </div>
      </div>
      <div className="section-content bg-white pdt-3">
        <h2 className="title pdb-2">{"Developers love our platform"}</h2>
        <div className="row">
          <div className="small-12 medium-4 large-4 columns how-it-works">
            <RetinaImage
                src={[require("../imgs/how-does-it-work-1.png"), require("../imgs/how-does-it-work-1_2x.png")]}
            />
          </div>
          <div className="small-12 medium-4 large-4 columns how-it-works">
            <RetinaImage
                src={[require("../imgs/how-does-it-work-2.png"), require("../imgs/how-does-it-work-2_2x.png")]}
            />
          </div>
          <div className="small-12 medium-4 large-4 columns how-it-works">
            <RetinaImage
                src={[require("../imgs/how-does-it-work-3.png"), require("../imgs/how-does-it-work-3_2x.png")]}
            />
          </div>
        </div>
      </div>
      <div className="section-bar pdt-3 pdb-4 referals">
        <h2 className="title pdb-1">{"Experts and visionaries love us"}</h2>
        <Slider {...settings}>
          <div>
            <div className="small-12 medium-10 medium-centered large-8 large-centered columns">
              <p className="quote pdb-2"><FontIcon className={"icon icon-quotes-left"}/>{" Awesome help in different development environments to be more productive "}<FontIcon className={"icon icon-quotes-right"}/></p>
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
        <div className="small-12 medium-12 large-12 columns pdt-2 pdb-2 pricing-list">
          <div className="row">
            <h3 className="title pdb-1">{"Pricing"}</h3>
            <p>{"Prices are per month, per site"}</p>
          </div>
          <div className="small-12 medium-2 large-2 large-offset-1 columns">
            <Paper
                style={styles.paper}
                zDepth={1}
            >
              <p className="title">{"STARTUP"}</p>
              <div className="price-content">
                <p className="price"><span className="symbol">{"$"}</span>{"0.00"}</p>
              </div>
              <p className="subtitle">{"Project deploy"}</p>
              <p className="description">{"Test every feature in isolation with automatically generated staging servers for a git repository"}</p>
              <RaisedButton
                  label="Start Free"
                  labelStyle={styles.raisedButtonLabel}
                  secondary
                  style={styles.raisedButtonStyle}
                  overlayStyle={styles.pricingRaisedButton}
              />
            </Paper>
          </div>
          <div className="small-12 medium-2 large-2 columns">
          <Paper
              style={styles.paper}
              zDepth={1}
          >
            <p className="title">{"DEVELOPMENT"}</p>
            <div className="price-content">
              <p className="price"><span className="symbol">{"$"}</span>{"15.00"}</p>
            </div>
            <p className="subtitle">{"Agile project development"}</p>
            <p className="description">{"CLI"}</p>
            <p className="description">{"Support Channel"}</p>
            <RaisedButton
                label="Sign Up Now"
                labelStyle={styles.raisedButtonLabel}
                secondary
                style={styles.raisedButtonStyle}
                overlayStyle={styles.pricingRaisedButton}
            />
          </Paper>
          </div>
          <div className="small-12 medium-2 large-2 columns">
            <Paper
                style={styles.paper}
                zDepth={1}
            >
              <p className="title">{"MEDIUM"}</p>
              <div className="price-content">
                <p className="price"><span className="symbol">{"$"}</span>{"50.00"}</p>
              </div>
              <p className="subtitle">{"Agile project team development"}</p>
              <p className="description">{"CLI"}</p>
              <p className="description">{"Local Environment"}</p>
              <p className="description">{"Collaborative Teams"}</p>
              <p className="description">{"Support Channel"}</p>
              <RaisedButton
                  label="Sign Up Now"
                  labelStyle={styles.raisedButtonLabel}
                  secondary
                  style={styles.raisedButtonStyle}
                  overlayStyle={styles.pricingRaisedButton}
              />
            </Paper>
          </div>
          <div className="small-12 medium-2 large-2 columns">
            <Paper
                style={styles.paper}
                zDepth={1}
            >
              <p className="title">{"LARGE"}</p>
              <div className="price-content">
                <p className="price"><span className="symbol">{"$"}</span>{"200.00"}</p>
              </div>
              <p className="subtitle">{"Customized tools"}</p>
              <p className="description">{"CLI"}</p>
              <p className="description">{"Local Environment"}</p>
              <p className="description">{"Collaborative Teams"}</p>
              <p className="description">{"Customized security"}</p>
              <p className="description">{"Support Channel"}</p>
              <RaisedButton
                  label="Sign Up Now"
                  labelStyle={styles.raisedButtonLabel}
                  secondary
                  style={styles.raisedButtonStyle}
                  overlayStyle={styles.pricingRaisedButton}
              />
            </Paper>
          </div>
          <div className="small-12 medium-2 large-2 end columns">
            <Paper
                style={styles.paper}
                zDepth={1}
            >
              <p className="title">{"ENTERPRISE"}</p>
              <div className="price-content">
                <p className="price"><span className="symbol">{"Annual Contracts"}</span></p>
              </div>
              <p className="subtitle">{"Mission critical / Complex apps / Transactional"}</p>
              <p className="description">{"CLI"}</p>
              <p className="description">{"Local Environment"}</p>
              <p className="description">{"Collaborative Teams"}</p>
              <p className="description">{"Customized security"}</p>
              <p className="description">{"Team performance Metrics"}</p>
              <p className="description">{"24 / 7 support"}</p>
              <RaisedButton
                  label="Sign Up Now"
                  labelStyle={styles.raisedButtonLabel}
                  secondary
                  style={styles.raisedButtonStyle}
                  overlayStyle={styles.pricingRaisedButton}
              />
            </Paper>
          </div>
          <div className="row">
            <div className="small-12 medium-12 large-12 columns addons">
              <span className="title">{"ADD-ONS"}</span>
              <span className="addon">{"$10 / additional users"}</span>
              <span className="addon">{"$40 / automated test environment"}</span>
              <span className="addon">{"$10 / monitoring"}</span>
              <span className="addon">{"$21 / additional 3 environments"}</span>
              <span className="addon">{"$2.5 / 5GB, per environment"}</span>
            </div>
          </div>
        </div>
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
        </div>
      </div>
    </div>
  );
};

export default Home;
