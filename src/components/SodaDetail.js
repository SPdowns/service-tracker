import React from 'react';
import PropTypes from 'prop-types'

function SodaDetail(props){
  const {soda, onClickingDelete} = props
  return (
    <React.Fragment>
      <h1>Sodas</h1>
      <h3>{props.names} - {props.price}</h3>
      <p><em>{props.slogan}</em></p>      
      <button onClick={ props.onClickEdit }>Update Soda</button>
      <button onClick={()=> props.onClickingDelete(soda.id)}>Close Soda</button>
      <hr/>
    </React.Fragment>
  );
}

SodaDetail.propTypes = {
  soda: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickEdit: PropTypes.func
};

export default SodaDetail;