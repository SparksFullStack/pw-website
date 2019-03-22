// * TODO
// Add link to card image
// Display a set amount of previous users then have the dropdown
// Add admin login modal
// Add skin adding modal

import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import AddSkins from './components/AddSkins';



class App extends Component {
  state = {
    modalState: {
      isOpen: false,
      modalType: ""
    }
  }

  toggleModal = (modalType) => {
      console.log(modalType);
      if (modalType) {
          this.setState({ modalState: { isOpen: !this.state.modalState.isOpen, modalType }});
      } else {
          this.setState({ modalState: { isOpen: !this.state.modalState.isOpen, modalType: "" }});
      }
  }

  render() {
    return (
      <div className="App">
        <Route path="/" exact component={() => <Home toggleModal={this.toggleModal} modalState={this.state.modalState}/>} />
        <Route path='/add_skins' exact component={AddSkins} />
      </div>
    );
  }
}

export default App;
