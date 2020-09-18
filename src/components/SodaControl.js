import React from "react";
import NewSodaForm from "./NewSodaForm";
import SodaList from "./SodaList";

class SodaControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterSodaList: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleAddingNewSodaToList = (newSoda) => {
    const newMasterSodaList = this.state.masterSodaList.concat(newSoda);
    this.setState({masterSodaList: newMasterSodaList,
      formVisableOnPage: false});
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
      currentlyVisibleState = <NewSodaForm onNewSodaCreation={this.handleAddingNewSodaToList} />
      buttonText = "Return to Soda List"
    } else {
      currentlyVisibleState = <SodaList sodaList={this.state.masterSodaList}/>
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

export default SodaControl;