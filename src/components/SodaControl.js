import React from "react";
import NewSodaForm from "./NewSodaForm";
import SodaList from "./SodaList";

class SodaControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterSodaList: [],
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisableOnPage: !prevState.formVisableOnPage
    }));
  }

  handleAddingNewSodaToList = (newSoda) => {
    const newMasterSodaList = this.state.masterSodaList.concat(newSoda);
    this.setState({masterSodaList: newMasterSodaList,
      formVisableOnPage: false});
  }

  render(){
    let currentlyVisibleState = null;
    let addSodaButton = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewSodaForm onNewSodaCreation={this.handleAddingNewSodaToList} />
      addSodaButton = "Return to Soda List"
    } else {
      currentlyVisibleState = <SodaList sodaList={this.state.masterSodaList}/>
      addSodaButton = "Add Soda"
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{addSodaButton}</button>
      </React.Fragment>
    );
  }
}

export default SodaControl;