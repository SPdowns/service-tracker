import React from "react";
import PropTypes from "prop-types"

function Soda(props){
  return (
    <React.Fragment>
      <div onClick={()=> props.whenSodaClicked(props.id)}>
        <h3>{props.names} - {props.price}</h3>
        <p><em>{props.slogan}</em></p>
        <p>{props.remainingCans}</p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Soda.propTypes = {
  names: PropTypes.string,
  price: PropTypes.string,
  slogan: PropTypes.string,
  remainingCans: PropTypes.number,
  id: PropTypes.string,
  whenSodaClicked: PropTypes.func,
  whenSellCansClicked: PropTypes.func
};

export default Soda;