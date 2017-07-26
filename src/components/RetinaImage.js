import isRetina from "is-retina";
import PropTypes from "prop-types";
import React from "react";

const RetinaImage = ( {className, src} ) => {
  return (
    <img
        className={className}
        src={isRetina()?src[0]:src[1]}
    />
  );
};

RetinaImage.propTypes = {
  className: PropTypes.string,
  src: PropTypes.array.isRequired,
};

export default RetinaImage;