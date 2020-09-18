import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types"

function NewSodaForm(props){
  function handleNewSodaFormSubmission(event) {
    event.preventDefault();
    props.onNewSodaCreation({names: event.target.names.value, price: event.target.price.value, slogan: event.target.slogan.value, id: v4()})
  }
  return (
    <React.Fragment>
      <form onSubmit={handleNewSodaFormSubmission}>
        <input
          type='text'
          name='names'
          placeholder='Soda Names' />
        <input
          type='text'
          name='price'
          placeholder='Price' />
        <textarea
          name='slogan'
          placeholder="Type the soda's slogan." />
        <button type='submit'>Help!</button>
      </form>
    </React.Fragment>
  );
}

NewSodaForm.propTypes = {
  onNewSodaCreation: PropTypes.func
}

export default NewSodaForm;