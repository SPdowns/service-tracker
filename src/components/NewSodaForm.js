import React from "react";
import { v4 } from "uuid";

function NewSodaForm(){
  function handleNewSodaFormSubmission(event) {
    event.preventDefault();
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

export default NewSodaForm;