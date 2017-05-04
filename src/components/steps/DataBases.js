import { fromJS } from "immutable";
import Options from "./Options";
import RaisedButton from "material-ui/RaisedButton";
import React, { PropTypes } from "react";

const Steps = ( {setActiveStep, setDatabase, removeDatabase, databasesOptions, databases} ) => {
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
    <div className="align-center">
      <h1 className="align-center">{"Selecciona la Base de Datos que utilizas"}</h1>
      <Options
          handleChange={handleChangeDatabase}
          options={databasesOptions}
          optionsActives={databases}
      />
      <div className="pdt-2">
        <RaisedButton
            label={"Anterior"}
            onTouchTap={()=>setActiveStep(0)}
            primary
            style={style}
        />
        <RaisedButton
            disabled={databases.size==0?true:false}
            label={"Siguiente"}
            onTouchTap={()=>setActiveStep(2)}
            primary
            style={style}
        />
      </div>
    </div>
  );
};

Steps.propTypes = {
  removeDatabase: PropTypes.func.isRequired,
  setActiveStep: PropTypes.func.isRequired,
  setDatabase: PropTypes.func.isRequired,
  databases: PropTypes.object.isRequired,
  databasesOptions: PropTypes.object.isRequired
};

export default Steps;
