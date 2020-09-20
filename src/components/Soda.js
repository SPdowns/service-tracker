import React from "react";
import PropTypes from "prop-types"

function Soda(props){
  return (
    <React.Fragment>
      <div onClick = {()=> props.whenTicketClicked(props.id)}>
        <h3>{props.names} - {props.price}</h3>
        <p><em>{props.slogan}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Soda.propTypes = {
  names: PropTypes.string,
  price: PropTypes.string,
  slogan: PropTypes.string,
  id: PropTypes.string,
  whenSodaClicked: PropTypes.func
};

export default Soda;