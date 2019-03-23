import React, { Component } from 'react';

import Header from './Header';
import Showcase from './Showcase';
import Ads from './Ads';
import Products from './Products';
import PopupModal from './PopupModal';
import Footer from './Footer';

class Home extends Component {
    render() {
        return (
            <div id="home">
                <Header page='home' toggle={this.props.toggleModal} />
                <Showcase />
                <Ads />
                <Products skins={this.props.skins} toggleModal={this.props.toggleModal} />
                <Footer />
                <PopupModal toggle={this.props.toggleModal} isOpen={this.props.modalState.isOpen} modalType={this.props.modalState.modalType} />
            </div>
        )
    }
}

export default Home;