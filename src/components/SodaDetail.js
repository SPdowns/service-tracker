import React from 'react';
import PropTypes from 'prop-types'

function SodaDetail(props){
  const {soda, onClickingDelete} = props
  function handleSellSoda() {
    if(soda.remainingCans > 0) {
      props.onClickSell({
          names: soda.names,
          price: soda.price,
          slogan: soda.slogan,
          remainingCans: soda.remainingCans -1,
          id: soda.id
      })
    }

  }
  return (
    <React.Fragment>
      <h1>Sodas</h1>
      <h3>{soda.names} - {soda.price}</h3>
      <p><em>{soda.slogan}</em></p>
      <p>{soda.remainingCans}</p>
      <button onClick={ props.onClickEdit }>Update Soda</button>
      <button onClick={ handleSellSoda }>Sell One Soda</button>
      <button onClick={()=> onClickingDelete(soda.id)}>Delete Soda</button>
      <hr/>
    </React.Fragment>
  );
}

SodaDetail.propTypes = {
  soda: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickEdit: PropTypes.func,
  onClickSell: PropTypes.func
};

export default SodaDetail;