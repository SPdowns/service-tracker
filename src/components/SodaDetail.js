import React from 'react';
import PropTypes from 'prop-types'

function SodaDetail(props){
  const {soda, onClickDelete} = props
  return (
    <React.Fragment>
      <h1>Sodas</h1>
      <h3>{props.names} - {props.price}</h3>
      <p><em>{props.slogan}</em></p>      
      <button onClick={ props.onClickEdit }>Update Soda</button>
      <button onClick={()=> props.onClickDelete(soda.id)}>Close Soda</button>
      <hr/>
    </React.Fragment>
  );
}

SodaDetail.propTypes = {
  soda: PropTypes.object,
  onClickDelete: PropTypes.func,
  onClickEdit: PropTypes.func
};

export default SodaDetail;