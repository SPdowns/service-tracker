import React from "react";
import NewSodaForm from "./NewSodaForm";
import SodaList from "./SodaList";
import SodaDetail from "./SodaDetail";
import EditSodaForm from './EditSodaForm'

class SodaControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterSodaList: [],
      selectedSoda: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedSoda != null) {
      this.setState({
        formVisableOnPage: false,
        selectedSoda: null,
        editing: false
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
    const selectedSoda = this.state.masterSodaList(soda => soda.id)[0];
    this.setState({selectedSoda: selectedSoda});
  }

  handleDeletingSoda = (id) => {
    const newMasterSodaList = this.state.masterSodaList.filter(soda => soda.id !== id);
    this.setState({
      masterSodaList: newMasterSodaList,
      selectedSoda: null
    })
  }

  handleEditClick = () => {
    console.log("handleEditClick breached the hull!!")
    this.setState({editing: true});
  }

  handleEditingSodaInList = (sodaToEdit) => {
    const editedMasterSodaList = this.state.masterSodaList
      .filter(soda => soda.id !== this.state.selectedSoda.id)
      .concat(sodaToEdit);
    this.setState({
      masterSodaList: editedMasterSodaList,
      editing: false,
      selectedSoda: null
    })
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = <EditSodaForm soda = {this.state.selectedSoda} onEditSoda = {this.handleEditingSodaInList}/>
      buttonText = "Return to Soda List";
    } else if (this.state.selectedSoda != null) {
      currentlyVisibleState = <SodaDetail soda = {this.state.selectedSoda} onClickDelete = {this.handleDeletingSoda} onClickEdit = {this.handleEditClick} />
      buttonText = "Return to Soda List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewSodaForm onNewSodaCreation={this.handleAddingNewSodaToList} />
      buttonText = "Return to Soda List";
    } else {
      currentlyVisibleState = <SodaList sodaList={this.state.masterSodaList} onSodaSelection={this.handleChangingSelectedSoda} />
      buttonText = "Add Soda";
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