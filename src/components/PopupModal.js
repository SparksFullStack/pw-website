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
        } else if (this.props.modalType === 'skin'){
            return  (
                <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className="popupModal">
                    <ModalHeader toggle={this.props.toggle}>{this.props.modalState.skin_name}</ModalHeader>
                    <ModalBody className="text-center">
                        <div className="products--card-image-holder">
                            <img className="products--card-image card-img-top" src={this.props.modalState.skin_image} />
                        </div>
                        <p style={{ marginTop: '15px', marginBottom: 0 }}><strong>Price:</strong> {this.props.modalState.price}</p>
                    </ModalBody>
                    <ModalFooter>
                        <a className="modal-footer--buttons btn btn-primary" href={this.props.modalState.buy_link} onClick={this.props.toggle}>Buy Now</a>
                        <Button className="modal-footer--buttons" color="secondary" onClick={this.props.toggle}>Close Modal</Button>
                    </ModalFooter>
                </Modal>
            )
        }
    }

    render() {
        console.log(this.props.modalState)
        return (
            <div className="container">
                {this.handleRenderModalType()}
            </div>
        )
    }
}

export default PopupModal;