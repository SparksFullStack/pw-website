import React, { Component } from 'react';
import "./PopupModal.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class PopupModal extends Component {
    render() {
        return (
            <div className="container">
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
            </div>
        )
    }
}

export default PopupModal;