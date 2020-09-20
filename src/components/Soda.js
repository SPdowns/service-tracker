import React from "react";
import PropTypes from "prop-types"

function Soda(props){
  return (
    <React.Fragment>
      <h3>{props.names} - {props.price}</h3>
      <p><em>{props.slogan}</em></p>
      <hr/>
    </React.Fragment>
  );
}

Soda.propTypes = {
  names: PropTypes.string,
  price: PropTypes.string,
  slogan: PropTypes.string
};

export default Soda;