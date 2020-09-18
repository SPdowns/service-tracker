import React from "react";
import NewSodaForm from "./NewSodaForm";
import SodaList from "./SodaList";

class SodaControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisableOnPage: !prevState.formVisableOnPage
    }));
  }

  render(){
    let currentlyVisibleState = null;
    let addSodaButton = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewSodaForm />
      buttonText = "Return to Soda List"
    } else {
      currentlyVisibleState = <SodaList />
      buttonText = "Add Soda"
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}