import React from 'react';
import ReusableForm from './ReusableForm';

function EditSodaForm (props) {
  const { ticket } = props;

  function handleEditSodaFormSubmisson(event) {
    event.preventDefault();
    props.onEditSoda({
      names: event.target.names.value,
      price: event.target.price.value,
      slogan: event.target.slogan.value,
      id: ticket.id});
  }
  
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditSodaFormSubmisson}
        addSodaButton="Update Soda" />
    </React.Fragment>
  )
}

export default EditSodaForm;