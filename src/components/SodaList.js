import React from "react"
import Soda from "./Soda"
import PropTypes from "prop-types";

function SodaList(props){
  const { soda } = props;
  return (
    <React.Fragment>
      <h1>Soda Detail</h1>
      <h3>{soda.name} - {soda.price}</h3>
      <p><em>{soda.slogan}</em></p>
      <hr/>
    </React.Fragment>
  );
}

SodaList.propTypes = {
  sodaList: PropTypes.array,
  onSodaSelection: PropTypes.func
};

export default SodaList