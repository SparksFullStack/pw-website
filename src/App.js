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
    this.setState({ modalState: { isOpen: !this.state.modalState.isOpen, modalType }});
  }


  render() {
    return (
      <div className="App">
        <PopupModal toggle={this.toggleModal} isOpen={this.state.modalState.isOpen} modalType={this.state.modalState.modalType} />
        <Header />
        <Showcase />
        <Ads />
        <Products />
      </div>
    );
  }
}

export default App;
