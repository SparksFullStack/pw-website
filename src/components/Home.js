import React, { Component } from 'react';

import Header from './Header';
import Showcase from './Showcase';
import Ads from './Ads';
import Products from './Products';
import PopupModal from './PopupModal';
import Footer from './Footer';

class Home extends Component {
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
            <div id="home">
                <Header toggle={this.toggleModal} />
                <Showcase />
                <Ads />
                <Products toggleModal={this.toggleModal} />
                <Footer />
                <PopupModal toggle={this.toggleModal} isOpen={this.state.modalState.isOpen} modalType={this.state.modalState.modalType} />
            </div>
        )
    }
}

export default Home;