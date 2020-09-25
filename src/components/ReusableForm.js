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
        <input
          type='number'
          name='remainingCans'
          placeholder='Cans Remaining' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  )
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;