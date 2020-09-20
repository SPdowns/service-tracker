import React from 'react';
import PropTypes from 'prop-types'

function SodaDetail(props){
  return (
    <React.Fragment>
      <h1>Sodas</h1>
      <h3>{props.names} - {props.price}</h3>
      <p><em>{props.slogan}</em></p>
      <hr/>
    </React.Fragment>
  );
}

SodaDetail.propTypes = {
  soda: PropTypes.object
};

export default SodaDetail;