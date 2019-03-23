import React, { Component } from 'react';
import "./PopupModal.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class PopupModal extends Component {
    handleRenderModalType = () => {
        if (this.props.modalType === 'about') {
            return (
                <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className="popupModal">
                    <ModalHeader toggle={this.toggle}>About Permwaze</ModalHeader>
                    <ModalBody>
                        Photo, description, and other info go here
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.props.toggle}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.props.toggle}>Close Modal</Button>
                    </ModalFooter>
                </Modal>
            )
        } else return (
            <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className="popupModal">
                <ModalHeader toggle={this.props.toggle}>About Item</ModalHeader>
                <ModalBody className="text-center">
                    <img src="http://cdn.steamcommunity.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlY20hPbkI7PYhG5u5cRjiOXE_JbwjGu4ohQ0J3egI4ORcQNqYw3W8la5w-frgJK77ZXKwCQysyVwtnbayxKzhxlIarRum7XAHvqFh2jA=/200fx200f" alt="Item photo" />
                    <p>Item info goes here</p>
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={this.props.toggle}>Buy Now</Button>{' '}
                    <Button color="secondary" onClick={this.props.toggle}>Close Modal</Button>
                </ModalFooter>
            </Modal>
        )
    }

    render() {
        return (
            <div className="container">
                {this.handleRenderModalType()}
            </div>
        )
    }
}

export default PopupModal;