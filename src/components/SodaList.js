import React from "react"
import Soda from "./Soda"
import PropTypes from "prop-types";

function SodaList(props){
  return (
    <React.Fragment>
      <hr/>
      {props.masterSodaList.map((soda, index) =>
      <Soda names={soda.names}
            price={soda.price}
            slogan={soda.slogan}
            key={index}/>
    )}
    </React.Fragment>
  );
}

SodaList.propTypes = {
  sodaList: PropTypes.array
}

export default SodaList