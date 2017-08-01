import { fromJS } from "immutable";
import PropTypes from "prop-types";
import RaisedButton from "material-ui/RaisedButton";
import React from "react";
import TextField from "material-ui/TextField";

const Email = ( { cellphone, handleSaveUser, email, setActiveStep, setEmail, setCellphone, intl} ) => {
  const style = {
   margin: 12,
  };
  const handleEmail = (e) => {
    setEmail(fromJS({
      email: e.target.value
    }));
  };
  const handleCellphone = (e) => {
    setCellphone(fromJS({
      cellphone: e.target.value
    }));
  };
  return (
    <div className="align-center steps">
      <p className="align-center pdt-2 title">{intl.get("demo_where_to_send_local_environments")}</p>
      <div className="small-12 medium-6 large-6 medium-centered large-centered">
        <TextField
            floatingLabelText={intl.get("email")}
            fullWidth
            name={email}
            onChange={handleEmail}
            type="text"
        />
        <TextField
            floatingLabelText={intl.get("cellphone")}
            fullWidth
            name={cellphone}
            onChange={handleCellphone}
            type="text"
        />
      </div>
      <p className="align-center pdt-1 subtitle">{intl.get("demo_we_will_contact_you_for_quick_demo")}</p>
      <div className="pdt-5">
        <RaisedButton
            label={intl.get("previous")}
            onTouchTap={()=>setActiveStep(2)}
            primary
            style={style}
        />
        <RaisedButton
            disabled={email?false:true}
            label={intl.get("send")}
            onTouchTap={()=>{setActiveStep(4); handleSaveUser();}}
            primary
            style={style}
        />
      </div>
    </div>
  );
};

Email.propTypes = {
  cellphone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  handleSaveUser: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
  setActiveStep: PropTypes.func.isRequired,
  setCellphone: PropTypes.func.isRequired,
  setEmail: PropTypes.func.isRequired
};

export default Email;
