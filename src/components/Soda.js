import React from "react";
import PropTypes from "prop-types"

function Soda(props){
  return (
    <React.Fragment>
      <h3>{props.name} - {props.price}</h3>
      <p><em>{props.slogan}</em></p>
    </React.Fragment>
  );
}

Soda.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  slogan: PropTypes.string
};

export default Soda;