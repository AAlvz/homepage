import { fromJS } from "immutable";
import PropTypes from "prop-types";
import RaisedButton from "material-ui/RaisedButton";
import React from "react";
import TextField from "material-ui/TextField";

const Email = ( { handleSaveUser, email, setActiveStep, setEmail} ) => {
  const style = {
   margin: 12,
  };
  const handleChangeProjectName = (e) => {
    setEmail(fromJS({
      email: e.target.value
    }));
  };
  return (
    <div className="align-center">
      <h1 className="align-center pdt-2">{"¿A dónde enviamos tu ambiente local?"}</h1>
      <div className="small-12 medium-6 large-6 medium-centered large-centered">
        <TextField
            floatingLabelText={"Correo Electrónico"}
            fullWidth
            name={email}
            onChange={handleChangeProjectName}
            type="text"
        />
      </div>
      <div className="pdt-5">
        <RaisedButton
            label={"Anterior"}
            onTouchTap={()=>setActiveStep(2)}
            primary
            style={style}
        />
        <RaisedButton
            disabled={email?false:true}
            label={"Siguiente"}
            onTouchTap={()=>{setActiveStep(4); handleSaveUser();}}
            primary
            style={style}
        />
      </div>
    </div>
  );
};

Email.propTypes = {
  email: PropTypes.string.isRequired,
  handleSaveUser: PropTypes.func.isRequired,
  setActiveStep: PropTypes.func.isRequired,
  setEmail: PropTypes.func.isRequired
};

export default Email;
