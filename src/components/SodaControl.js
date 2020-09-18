import React from "react";
import NewSodaForm from "./NewSodaForm";
import SodaList from "./SodaList";

class SodaControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

  render(){
    let currentlyVisibleState = null;
    let addSodaButton = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewSodaForm />
    } else {
      currentlyVisibleState = <SodaList />
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        {addSodaButton}
      </React.Fragment>
    );
  }
}