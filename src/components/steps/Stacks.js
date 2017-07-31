import { fromJS } from "immutable";
import Options from "./Options";
import PropTypes from "prop-types";
import RaisedButton from "material-ui/RaisedButton";
import React from "react";

const Steps = ( {setActiveStep, setStack, removeStack, stacksOptions, stacks, intl} ) => {
  const style = {
   margin: 12,
  };
  const handleChangeStack = (value, insert) => {
    if(insert)
      setStack(fromJS({
        stack: value
      }));
    else
      removeStack(fromJS({
        stack: value
      }));
  };
  return (
    <div className="align-center steps">
      <p className="align-center title">{intl.get("demo_which_framework_you_need")}</p>
      <Options
          handleChange={handleChangeStack}
          options={stacksOptions}
          optionsActives={stacks}
      />
      <div className="pdt-2">
        <RaisedButton
            disabled={stacks.size==0?true:false}
            label={intl.get("next")}
            onTouchTap={()=>setActiveStep(1)}
            primary
            style={style}
        />
      </div>
    </div>
  );
};

Steps.propTypes = {
  intl: PropTypes.object.isRequired,
  removeStack: PropTypes.func.isRequired,
  setActiveStep: PropTypes.func.isRequired,
  setStack: PropTypes.func.isRequired,
  stacks: PropTypes.object.isRequired,
  stacksOptions: PropTypes.object.isRequired
};

export default Steps;
