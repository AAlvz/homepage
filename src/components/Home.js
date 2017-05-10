import { browserHistory } from "react-router";
import { Tabs, Tab } from "material-ui/Tabs";
import AppBar from "material-ui/AppBar";
import FontIcon from "material-ui/FontIcon";
import RaisedButton from "material-ui/RaisedButton";
import React from "react";

const Home = () => {
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
      window.open(url, "_blank");
    else
      browserHistory.push(url);
  };
  let myTabs = (
    <Tabs style={styles.tabs}>
        <Tab
            label="Inicio"
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
            label="Documentación"
            onActive={()=>onTabClick("http://help.tinkerware.io/", true)}
            style={styles.tab}
        />
        <Tab
            label="Ayuda"
            onActive={()=>onTabClick("http://help.tinkerware.io/", true)}
            style={styles.tab}
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
        <h1 className="align-center pdt-10 title">{"Your Personal DevOps"}</h1>
        <p className="align-center pdt-2 sub-title">{"¡GO TO PRODUCTION IN ONE CLICK!"}</p>
      </div>
      <div className="bg-white pdt-3 pdb-3">
        <div className="row">
          <div className="small-12 medium-4 large-4 columns">
            <img src={require("../imgs/how-does-it-work-1.jpg")} />
          </div>
          <div className="small-12 medium-4 large-4 columns">
            <img src={require("../imgs/how-does-it-work-2.jpg")} />
          </div>
          <div className="small-12 medium-4 large-4 columns">
            <img src={require("../imgs/how-does-it-work-3.jpg")} />
          </div>
        </div>
      </div>
      <div className="row section-bar">
        <div className="small-12 medium-12 large-12 columns pdt-2 pdb-2">
          <h3 className="title">{"Don't Deploy. Replicate!"}</h3>
          <p className="sub-title">{"Get instant working environments with Fast setup and take it to any level"}</p>
        </div>
      </div>
      <div className="section-content bg-white pdt-3 pdb-3">
        <div className="row">
          <div className="small-12 medium-4 large-4 columns">
            <FontIcon className={"icon icon-project"}/>
            <h3 className="title">{"Create projects easily"}</h3>
            <p className="sub-title">{"Connect your Git projects to your customized infrastructure."}</p>
          </div>
          <div className="small-12 medium-4 large-4 columns">
            <FontIcon className={"icon icon-develop"}/>
            <h3 className="title">{"Get instant environments"}</h3>
            <p className="sub-title">{"Grow from Development/Stage/Prod right away"}</p>
          </div>
          <div className="small-12 medium-4 large-4 columns">
            <FontIcon className={"icon icon-add"}/>
            <h3 className="title">{"Stronger projects"}</h3>
            <p className="sub-title">{"Get access to Frameworks, CIs, Security and more. Assemble your own stack"}</p>
          </div>
        </div>
        <div className="row">
          <div className="small-12 medium-4 large-4 columns">
            <FontIcon className={"icon icon-settings"}/>
            <h3 className="title">{"Replicate Projects"}</h3>
            <p className="sub-title">{"Make all your environments to run with the same configuration."}</p>
          </div>
          <div className="small-12 medium-4 large-4 columns">
            <FontIcon className={"icon icon-server"}/>
            <h3 className="title">{"Choose your own server provider"}</h3>
            <p className="sub-title">{"DigitalOcean? AWS? Custom? Your choise."}</p>
          </div>
          <div className="small-12 medium-4 large-4 columns">
            <FontIcon className={"icon icon-support"}/>
            <h3 className="title">{"Growing Tools"}</h3>
            <p className="sub-title">{"We automate tools integration depending on the customer needs. Reach us at any time!"}</p>
          </div>
        </div>
      </div>
      <div className="row section-bar">
        <div className="small-12 medium-12 large-12 columns pdt-2 pdb-2">
          <h3 className="title">{"Start Today!"}</h3>
          <RaisedButton
              label="Try MyDevOp Now"
              onClick={()=>onTabClick("/demo", false)}
              secondary
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
