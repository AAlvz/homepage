import { browserHistory } from "react-router";
import { Tabs, Tab } from "material-ui/Tabs";
import AppBar from "material-ui/AppBar";
import FontIcon from "material-ui/FontIcon";
import RaisedButton from "material-ui/RaisedButton";
import React from "react";
import RetinaImage from "./RetinaImage";
import Slider from "react-slick";

const Home = () => {
  let settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  let styles = {
    appBar: {
      flexWrap: "wrap",
      position: "fixed",
      top: 0
    },
    raisedButtonMenu: {
      lineHeight: "29px",
    },
    raisedButton: {
      height: "50px",
      lineHeight: "50px",
      width: 200,
    },
    raisedButtonOverlay: {
      height: "50px",
    },
    tabs: {
      width: "100%"
    },
    tabButton: {
      margin: "0 2em",
      fontFamily: "SFText-Bold"
    },
    tabRaisedButton: {
      fontFamily: "SFText-Bold",
      height: "20px",
      margin: "0 2em"
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
          // onTitleTouchTap={handleTouchTap}
          iconElementRight={myTabs}
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
            poster="../imgs/Office-Day.jpg"
        >
          <source
              src="../video/Office-Day.webm"
              type="video/webm"
          />
          <source
              src="../video/Office-Day.mp4"
              type="video/mp4"
          />
        </video>
        <h1 className="align-center pdt-1 pdt-5 title">{"The perfect DevOps automation platform"}<br/>{"for web development teams"}</h1>
        <p className="align-center pdb-2 sub-title">{"We help teams become agile, efficient and profitable through development and operations."}<br/>{"Focus on development. We handle operations."}</p>
        <RaisedButton
            buttonStyle={styles.raisedButton}
            label="Try Now"
            onClick={()=>onTabClick("/demo", false)}
            overlayStyle={styles.raisedButtonOverlay}
            secondary
        />
      </div>
      <div className="section-content bg-white pdt-3 pdb-3">
        <h2 className="section-title">{"Be as productive as Netflix, Amazon, Google, Facebook"}</h2>
        <h3 className="section-subtitle pdb-4">{"Boost your team performance using devops tools"}</h3>
        <div className="row">
          <div className="small-12 medium-4 large-4 columns">
            <FontIcon className={"icon icon-bootstrap"}/>
            <h3 className="title">{"Bootstrap your project"}</h3>
            <p className="sub-title">{"Select your framework, databases and services and start to develop instantly."}</p>
          </div>
          <div className="small-12 medium-4 large-4 columns">
            <FontIcon className={"icon icon-test"}/>
            <h3 className="title">{"Test instantly"}</h3>
            <p className="sub-title">{"Deploy new features to a provided QA environment and test them immediately."}</p>
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
            <h3 className="title">{"Automate everything"}</h3>
            <p className="sub-title">{"Need CI? Certificates? Security? We take care of them for you."}</p>
          </div>
        </div>
        <div className="row">
          <div className="small-12 medium-4 large-4 columns">
            <FontIcon className={"icon icon-integrate"}/>
            <h3 className="title">{"Integrate quickly"}</h3>
            <p className="sub-title">{"Test locally and in the cloud to publish new features without hassle."}</p>
          </div>
          <div className="small-12 medium-4 large-4 columns">
            <FontIcon className={"icon icon-upgrade"}/>
            <h3 className="title">{"Upgrade anytime"}</h3>
            <p className="sub-title">{"Need a bigger QA environment? Need to handle more traffic? Just one click away."}</p>
          </div>
          <div className="small-12 medium-4 large-4 columns">
            <FontIcon className={"icon icon-support"}/>
            <h3 className="title">{"Superhuman Support"}</h3>
            <p className="sub-title">{"We can help you to integrate DevOps tools in your workflow. And we are available at anytime."}</p>
          </div>
        </div>
      </div>
      <div className="section-bar">
        <div className="row">
          <div className="small-12 medium-12 large-12 columns pdt-2 pdb-2">
            <h3 className="title pdb-1">{"Don't Deploy. Replicate!"}</h3>
            <p className="sub-title">{"Get instant working environments with Fast setup and take it to any level"}</p>
          </div>
        </div>
      </div>
      <div className="section-content bg-white pdt-3 pdb-3">
        <h2 className="section-title pdb-2">{"Developers loves our platform"}</h2>
        <div className="row">
          <div className="small-12 medium-4 large-4 columns">
            <RetinaImage
                src={[require("../imgs/how-does-it-work-1.png"), require("../imgs/how-does-it-work-1_2x.png")]}
            />
          </div>
          <div className="small-12 medium-4 large-4 columns">
            <RetinaImage
                src={[require("../imgs/how-does-it-work-2.png"), require("../imgs/how-does-it-work-2_2x.png")]}
            />
          </div>
          <div className="small-12 medium-4 large-4 columns">
            <RetinaImage
                src={[require("../imgs/how-does-it-work-3.png"), require("../imgs/how-does-it-work-3_2x.png")]}
            />
          </div>
        </div>
      </div>
      <div className="section-bar pdt-3 pdb-4 referals">
        <h2 className="section-title pdb-2">{"Experts and visionaries love us"}</h2>
        <Slider {...settings}>
          <div>
            <div className="small-12 medium-10 medium-centered large-8 large-centered columns">
              <p className="quote pdb-2">{"Con estos ambientes se nos permite agilizar proceso de actualización a los diferentes ambientes mucho mas rápido y eficiente lo cual antes perdiamos horas en realizar este proceso"}</p>
              <RetinaImage
                  className="company-image"
                  src={[require("../imgs/kiubix-logo.png"), require("../imgs/kiubix-logo_2x.png")]}
              />
              <p className="user pdt-1">{"Juan Carlos"}</p>
            </div>
          </div>
          <div>
            <div className="small-12 medium-10 medium-centered large-8 large-centered columns">
              <p className="quote pdb-2">{"Ayudar en los ambientes de desarrollo para ser más productivos"}</p>
              <RetinaImage
                  className="company-image"
                  src={[require("../imgs/kiubix-logo.png"), require("../imgs/kiubix-logo_2x.png")]}
              />
              <p className="user pdt-1">{"Ernesto"}</p>
            </div>
          </div>
          <div>
            <div className="small-12 medium-10 medium-centered large-8 large-centered columns">
              <p className="quote pdb-2">{"El utilizar el servicio de TinkerWare, me enseño una nueva manera de tener un entorno de desarrollo personalizado para cada uno de los proyectos y así no preocuparnos por que en el entorno de pruebas o de producción tengan diferentes versiones de PHP, MySQL o cualquier herramienta que estemos utilizando. De esta manera, el paso a testing o a pruebas, se vuelve más sencillo y sin complicaciones"}</p>
              <RetinaImage
                  className="company-image"
                  src={[require("../imgs/kiubix-logo.png"), require("../imgs/kiubix-logo_2x.png")]}
              />
              <p className="user pdt-1">{"Ernesto"}</p>
            </div>
          </div>
          <div>
            <div className="small-12 medium-10 medium-centered large-8 large-centered columns">
              <p className="quote pdb-2">{"Thinkerware innovación para tu empresa implementando metodologías ágiles"}</p>
              <RetinaImage
                  className="company-image"
                  src={[require("../imgs/kiubix-logo.png"), require("../imgs/kiubix-logo_2x.png")]}
              />
              <p className="user pdt-1">{"Ana Duran"}</p>
            </div>
          </div>
          <div>
            <div className="small-12 medium-10 medium-centered large-8 large-centered columns">
              <p className="quote pdb-2">{"Aprendizaje y experiencia para administración y altos estándares de calidad en los sistemas"}</p>
              <RetinaImage
                  className="company-image"
                  src={[require("../imgs/kiubix-logo.png"), require("../imgs/kiubix-logo_2x.png")]}
              />
              <p className="user pdt-1">{"Ana Duran"}</p>
            </div>
          </div>
          <div>
            <div className="small-12 medium-10 medium-centered large-8 large-centered columns">
              <p className="quote pdb-2">{"Thinkerware es una empresa altamente recomendable ya que son expertos en sus servicios y con un alto nivel de atención y soporte a usuarios. Siempre tienen mucha disposición y siempre superan las expectativas."}</p>
              <RetinaImage
                  className="company-image"
                  src={[require("../imgs/kiubix-logo.png"), require("../imgs/kiubix-logo_2x.png")]}
              />
              <p className="user pdt-1">{"Jorge"}</p>
            </div>
          </div>
        </Slider>
      </div>
      <div className="section-content bg-white">
        <div className="row">
          <div className="small-12 medium-12 large-12 columns pdt-2 pdb-2">
            <h3 className="title pdb-2">{"Start Today!"}</h3>
            <RaisedButton
                buttonStyle={styles.raisedButton}
                label="Try Now"
                onClick={()=>onTabClick("/demo", false)}
                overlayStyle={styles.raisedButtonOverlay}
                secondary
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
