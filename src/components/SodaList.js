import React from "react"
import Soda from "./Soda"
import PropTypes from "prop-types";

function SodaList(props){
  return (
    <React.Fragment>
      <hr/>
      {props.sodaList.map((soda) =>
      <Soda 
        whenSodaClicked = { props.onSodaSelection}
        names={soda.names}
        price={soda.price}
        slogan={soda.slogan}
        remainingCans={soda.remainingCans}
        id={soda.id}
        key={soda.id}/>
    )}

    </React.Fragment>
  );
}

SodaList.propTypes = {
  sodaList: PropTypes.array,
  onSodaSelection: PropTypes.func
};

export default SodaList