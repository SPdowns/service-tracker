import React from "react";
import { v4 } from "uuid";
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function NewSodaForm(props){
  function handleNewSodaFormSubmission(event) {
    event.preventDefault();
    props.onNewSodaCreation({
      names: event.target.names.value, 
      price: event.target.price.value, 
      slogan: event.target.slogan.value, 
      id: v4()})
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewSodaFormSubmission}
        buttonText="Add!" />
    </React.Fragment>
  );
}

NewSodaForm.propTypes = {
  onNewSodaCreation: PropTypes.func
}

export default NewSodaForm;