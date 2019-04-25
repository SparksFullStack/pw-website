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
          modalType: "",
          data: undefined,
        },
      }
    
    toggleModal = (modalType, skinState) => {
        if (modalType) {
            this.setState({ modalState: { isOpen: !this.state.modalState.isOpen, modalType, data: skinState }});
        } else {
            this.setState({ modalState: { isOpen: !this.state.modalState.isOpen, modalType: "" }});
        }
    }

    render() {
        return (
            <div id="home">
                <Header page='home' toggle={this.toggleModal} />
                <Showcase />
                {/* <Ads /> */}
                <Products skins={this.props.skins} time={this.props.time} toggleModal={this.toggleModal} />
                <Footer />
                <PopupModal toggle={this.toggleModal} isOpen={this.state.modalState.isOpen} modalType={this.state.modalState.modalType} modalState={this.state.modalState.data}/>
            </div>
        )
    }
}

export default Home;