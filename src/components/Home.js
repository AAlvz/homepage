import { browserHistory } from "react-router";
import { Tabs, Tab } from "material-ui/Tabs";
import AppBar from "material-ui/AppBar";
import FontIcon from "material-ui/FontIcon";
import RaisedButton from "material-ui/RaisedButton";
import React from "react";
import RetinaImage from "react-retina-image";
import Slider from "react-slick";

const Home = () => {
  let settings = {
    dots: true,
    arrows: false,
    autoplay: false,
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
    tabs: {
      width: "100%"
    },
    tab: {
      margin: "0 1em"
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
            label="Home"
            onActive={()=>onTabClick("/", false)}
            style={styles.tab}
            value={0}
        />
        <Tab
            label="Demo"
            onActive={()=>onTabClick("/demo", false)}
            style={styles.tab}
        />
        <Tab
            label="Blog"
            onActive={()=>onTabClick("https://blog.tinkerware.io/", true)}
            style={styles.tab}
        />
        <Tab
            label="Help"
            onActive={()=>onTabClick("http://help.tinkerware.io/", true)}
            style={styles.tab}
        />
        <Tab
            icon={
              <RaisedButton
                  label="Login"
                  onClick={()=>onTabClick("http://mydevop.tinkerware.io/", true)}
                  secondary
              />}
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
        <video poster="../imgs/Office-Day.jpg" id="bgvid" playsInline autoPlay muted loop>
          <source src="../video/Office-Day.webm" type="video/webm" />
          <source src="../video/Office-Day.mp4" type="video/mp4" />
        </video>
        <h1 className="align-center pdt-5 title">{"DevOps automation platform for web development teams"}</h1>
        <p className="align-center pdt-1 pdb-1 sub-title">{"We help teams become agile, efficient and profitable through development and operations."}</p>
        <p className="align-center pdb-2 sub-title">{"Focus on development. We handle operations."}</p>
        <RaisedButton
            label="Try Now"
            onClick={()=>onTabClick("/demo", false)}
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
        <h2 className="section-title pdb-2">{"Developers loves out platform"}</h2>
        <div className="row">
          <div className="small-12 medium-4 large-4 columns">
            <RetinaImage
                src={[require("../imgs/how-does-it-work-1.jpg"), require("../imgs/how-does-it-work-1_2x.jpg")]}
            />
          </div>
          <div className="small-12 medium-4 large-4 columns">
            <RetinaImage
                src={[require("../imgs/how-does-it-work-2.jpg"), require("../imgs/how-does-it-work-2_2x.jpg")]}
            />
          </div>
          <div className="small-12 medium-4 large-4 columns">
            <RetinaImage
                src={[require("../imgs/how-does-it-work-3.jpg"), require("../imgs/how-does-it-work-3_2x.jpg")]}
            />
          </div>
        </div>
      </div>
      <div className="section-bar pdt-3 pdb-3">
        <h2 className="section-title pdb-2">{"Experts and visionaries love us"}</h2>
        <Slider {...settings}>
          <div>
            <p className="quote">{"Con estos ambientes se nos permite agilizar proceso de actualización a los diferentes ambientes mucho mas rápido y eficiente lo cual antes perdiamos horas en realizar este proceso"}</p>
            <p className="company">{"Kiubix"}</p>
            <p className="name">{"Juan Carlos"}</p>
          </div>
          <div>
            <p className="quote">{"Ayudar en los ambientes de desarrollo para ser más productivos"}</p>
            <p className="company">{"Kiubix"}</p>
            <p className="name">{"Ernesto"}</p>
          </div>
          <div>
            <p className="quote">{"El utilizar el servicio de TinkerWare, me enseño una nueva manera de tener un entorno de desarrollo personalizado para cada uno de los proyectos y así no preocuparnos por que en el entorno de pruebas o de producción tengan diferentes versiones de PHP, MySQL o cualquier herramienta que estemos utilizando. De esta manera, el paso a testing o a pruebas, se vuelve más sencillo y sin complicaciones"}</p>
            <p className="company">{"Kiubix"}</p>
            <p className="name">{"Ernesto"}</p>
          </div>
          <div>
            <p className="quote">{"Thinkerware innovación para tu empresa implementando metodologías ágiles"}</p>
            <p className="company">{"Kiubix"}</p>
            <p className="name">{"Ana Duran"}</p>
          </div>
          <div>
            <p className="quote">{"Aprendizaje y experiencia para administración y altos estándares de calidad en los sistemas"}</p>
            <p className="company">{"Kiubix"}</p>
            <p className="name">{"Ana Duran"}</p>
          </div>
          <div>
            <p className="quote">{"Thinkerware es una empresa altamente recomendable ya que son expertos en sus servicios y con un alto nivel de atención y soporte a usuarios. Siempre tienen mucha disposición y siempre superan las expectativas."}</p>
            <p className="company">{"Kiubix"}</p>
            <p className="name">{"Jorge"}</p>
          </div>
        </Slider>
      </div>
      <div className="section-content bg-white">
        <div className="row">
          <div className="small-12 medium-12 large-12 columns pdt-2 pdb-2">
            <h3 className="title pdb-2">{"Start Today!"}</h3>
            <RaisedButton
                label="Try Now"
                onClick={()=>onTabClick("/demo", false)}
                secondary
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
