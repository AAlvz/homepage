import { fromJS } from "immutable";
import Options from "./Options";
import PropTypes from "prop-types";
import RaisedButton from "material-ui/RaisedButton";
import React from "react";

const Steps = ( {setActiveStep, setDatabase, removeDatabase, databasesOptions, databases, intl} ) => {
  const style = {
   margin: 12,
  };
  const handleChangeDatabase = (value, insert) => {
    if(insert)
      setDatabase(fromJS({
        database: value
      }));
    else
      removeDatabase(fromJS({
        database: value
      }));
  };
  return (
    <div className="align-center steps">
      <p className="align-center title">{intl.get("demo_select_your_databases")}</p>
      <Options
          handleChange={handleChangeDatabase}
          options={databasesOptions}
          optionsActives={databases}
      />
      <div className="pdt-2">
        <RaisedButton
            label={intl.get("previous")}
            onTouchTap={()=>setActiveStep(0)}
            primary
            style={style}
        />
        <RaisedButton
            disabled={databases.size==0?true:false}
            label={intl.get("next")}
            onTouchTap={()=>setActiveStep(2)}
            primary
            style={style}
        />
      </div>
    </div>
  );
};

Steps.propTypes = {
  databases: PropTypes.object.isRequired,
  databasesOptions: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired,
  removeDatabase: PropTypes.func.isRequired,
  setActiveStep: PropTypes.func.isRequired,
  setDatabase: PropTypes.func.isRequired
};

export default Steps;
