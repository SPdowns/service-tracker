import React from "react";
import NewSodaForm from "./NewSodaForm";
import SodaList from "./SodaList";
import SodaDetail from "./SodaDetail";

class SodaControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterSodaList: [],
      selectedSoda: null
    };
  }

  handleClick = () => {
    if (this.state.selectedSoda != null) {
      this.setState({
        formVisableOnPage: false,
        selectedSoda: null
      });
    } else {
      this.setState(prevState => ({
        formVisableOnPage: !prevState.formVisableOnPage,
      }));
    }
  }

  handleAddingNewSodaToList = (newSoda) => {
    const newMasterSodaList = this.state.masterSodaList.concat(newSoda);
    this.setState({masterSodaList: newMasterSodaList,
      formVisableOnPage: false});
  }

  handleChangingSelectedSoda = (id) => {
    const selectedSoda = this.state.masterSodaList(soda => soda.id) [0];
    this.setState({selectedSoda: selectedSoda});
  }

  handleDeletingSoda = (id) => {
    const newMasterSodaList = this.state.masterSodaList.filter(soda => soda.id !== id);
    this.setState({
      masterSodaList: newMasterSodaList,
      selectedSoda: null
    })
  }

  render(){
    let currentlyVisibleState = null;
    let addSodaButton = null;
    if (this.state.selectedSoda != null) {
      currentlyVisibleState = <SodaDetail soda = {this.state.selectedSoda} onClickDelete = {this.handleDeletingSoda}/>
      addSodaButton = "Return to Soda List"
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewSodaForm onNewSodaCreation={this.handleAddingNewSodaToList} />
      addSodaButton = "Return to Soda List"
    } else {
      currentlyVisibleState = <SodaList sodaList={this.state.masterSodaList} onSodaSelection={this.handleChangingSelectedSoda} />
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