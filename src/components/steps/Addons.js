import { fromJS } from "immutable";
import Options from "./Options";
import PropTypes from "prop-types";
import RaisedButton from "material-ui/RaisedButton";
import React from "react";

const Addons = ( {setActiveStep, setAddons, removeAddons, addonsOptions, addons, intl} ) => {
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
    <div className="align-center steps">
      <p className="align-center title">{intl.get("demo_select_your_addons")}</p>
      <Options
          handleChange={handleChangeAddons}
          options={addonsOptions}
          optionsActives={addons}
      />
      <div className="pdt-2">
        <RaisedButton
            label={intl.get("previous")}
            onTouchTap={()=>setActiveStep(1)}
            primary
            style={style}
        />
        <RaisedButton
            disabled={addons.size==0?true:false}
            label={intl.get("next")}
            onTouchTap={()=>setActiveStep(3)}
            primary
            style={style}
        />
      </div>
    </div>
  );
};

Addons.propTypes = {
  addons: PropTypes.object.isRequired,
  addonsOptions: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired,
  removeAddons: PropTypes.func.isRequired,
  setActiveStep: PropTypes.func.isRequired,
  setAddons: PropTypes.func.isRequired
};

export default Addons;
