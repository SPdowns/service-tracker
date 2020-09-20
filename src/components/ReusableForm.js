import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
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
        <button type='submit'>{props.addSodaButton}</button>
      </form>
    </React.Fragment>
  )
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  addSodaButton: PropTypes.string
};

export default ReusableForm;