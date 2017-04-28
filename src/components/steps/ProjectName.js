import { fromJS } from "immutable";
import RaisedButton from "material-ui/RaisedButton";
import React, { PropTypes } from "react";
import TextField from "material-ui/TextField";

const ProjectName = ( {setActiveStep, setProjectName, projectName} ) => {
  const style = {
   margin: 12,
  };
  const handleChangeProjectName = (e) => {
    setProjectName(fromJS({
      project_name: e.target.value
    }));
  };
  return (
    <div className="align-center">
      <h1 className="align-center pdt-2">{"Obtenga entornos de trabajo inmediatos con una configuración rápida y lleve a cualquier nivel"}</h1>
      <TextField
          errorText={projectName?"":"Este campo es requerido."}
          floatingLabelText={"Nombre del Proyecto"}
          fullWidth
          name={projectName}
          onChange={handleChangeProjectName}
          type="text"
      />
      <div className="pdt-5">
        <RaisedButton
            disabled={projectName?false:true}
            label={"Siguiente"}
            onTouchTap={()=>setActiveStep(1)}
            primary
            style={style}
        />
      </div>
    </div>
  );
};

ProjectName.propTypes = {
  projectName: PropTypes.string.isRequired,
  setActiveStep: PropTypes.func.isRequired,
  setProjectName: PropTypes.func.isRequired
};

export default ProjectName;
