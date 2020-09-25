import React from 'react';
import PropTypes from 'prop-types'
import ReusableForm from './ReusableForm';

function EditSodaForm (props) {
  const { soda } = props;

  function handleEditSodaFormSubmisson(event) {
    event.preventDefault();
    props.onEditSoda({
      names: event.target.names.value,
      price: event.target.price.value,
      slogan: event.target.slogan.value,
      remainingCans: event.target.remainingCans.value,
      id: soda.id});
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditSodaFormSubmisson}
        buttonText="Update Soda" />
    </React.Fragment>
  )
}

EditSodaForm.propTypes = {
  onEditSoda: PropTypes.func
};

export default EditSodaForm;