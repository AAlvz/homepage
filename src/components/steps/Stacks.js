import { fromJS } from "immutable";
import Options from "./Options";
import RaisedButton from "material-ui/RaisedButton";
import React, { PropTypes } from "react";

const Steps = ( {setActiveStep, setStack, removeStack, stacksOptions, stacks} ) => {
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
    <div className="align-center">
      <h1 className="align-center">{"Selecciona el Stack que utilizas"}</h1>
      <Options
          handleChange={handleChangeStack}
          options={stacksOptions}
          optionsActives={stacks}
      />
      <div className="pdt-2">
        <RaisedButton
            disabled={stacks.size==0?true:false}
            label={"Siguiente"}
            onTouchTap={()=>setActiveStep(1)}
            primary
            style={style}
        />
      </div>
    </div>
  );
};

Steps.propTypes = {
  removeStack: PropTypes.func.isRequired,
  setActiveStep: PropTypes.func.isRequired,
  setStack: PropTypes.func.isRequired,
  stacks: PropTypes.object.isRequired,
  stacksOptions: PropTypes.object.isRequired
};

export default Steps;
