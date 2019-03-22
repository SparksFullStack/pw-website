import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Showcase from './components/Showcase';
import Ads from './components/Ads';
import Products from './components/Products';
import PopupModal from './components/PopupModal';

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
        <Header toggle={this.toggleModal} />
        <Showcase />
        <Ads />
        <Products toggleModal={this.toggleModal} />
        <PopupModal toggle={this.toggleModal} isOpen={this.state.modalState.isOpen} modalType={this.state.modalState.modalType} />
      </div>
    );
  }
}

export default App;
