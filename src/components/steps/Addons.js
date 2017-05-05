import { fromJS } from "immutable";
import Options from "./Options";
import RaisedButton from "material-ui/RaisedButton";
import React, { PropTypes } from "react";

const Addons = ( {setActiveStep, setAddons, removeAddons, addonsOptions, addons} ) => {
  const style = {
   margin: 12,
  };
  const handleChangeAddons = (value, insert) => {
    if(insert)
      setAddons(fromJS({
        addon: value
      }));
    else
      removeAddons(fromJS({
        addon: value
      }));
  };
  return (
    <div className="align-center">
      <h1 className="align-center">{"Agrega tus complementos"}</h1>
      <Options
          handleChange={handleChangeAddons}
          options={addonsOptions}
          optionsActives={addons}
      />
      <div className="pdt-2">
        <RaisedButton
            label={"Anterior"}
            onTouchTap={()=>setActiveStep(1)}
            primary
            style={style}
        />
        <RaisedButton
            disabled={addons.size==0?true:false}
            label={"Siguiente"}
            onTouchTap={()=>setActiveStep(3)}
            primary
            style={style}
        />
      </div>
    </div>
  );
};

Addons.propTypes = {
  removeAddons: PropTypes.func.isRequired,
  setActiveStep: PropTypes.func.isRequired,
  setAddons: PropTypes.func.isRequired,
  addons: PropTypes.object.isRequired,
  addonsOptions: PropTypes.object.isRequired
};

export default Addons;
