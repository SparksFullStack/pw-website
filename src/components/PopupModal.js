import React, { Component } from 'react';
import "./PopupModal.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class PopupModal extends Component {
    
    handleRenderModalType = () => {
        if (this.props.modalType === 'about') {
            return (
                <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className="popupModal">
                    <ModalHeader toggle={this.props.toggle}>About Proskins</ModalHeader>
                    <ModalBody>
                        <img className="products--card-image card-img-top ml-auto mr-auto" style={{ height: "50px", width: "auto", display: "block" }} src={require('../resources/logo.jpg')} alt="Proskins Logo"/> 
                        <br />
                        <span style={{ width: "90%"}}  className="about--body--text">Proskins.net is a website designated to help you locate skins that are currently up for sale on Bitskins.com and CS.Money that were previously owned/used by your favorite pro or streamer.</span>
                        <br />
                        <br />
                        <div style={{ width: "90%"}} className="about--body--disclaimer ml-auto mr-auto">
                            <span className="text-danger">Disclaimer:</span>
                            <ul style={{ }}>
                                <li>Skins are chosen from a limited pool based on available data</li>
                                <li>All results are updated once daily due to processing time.</li>
                                <li>Proskins is not affiliated with Valve, Bitskins, or CS.Money, and receives no money from any skins that are purchased.</li>
                            </ul>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.props.toggle}>Close</Button>
                    </ModalFooter>
                </Modal>
            )
        } else if (this.props.modalType === 'skin'){
            return  (
                <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className="popupModal">
                    <ModalHeader toggle={this.props.toggle}>{this.props.modalState.skin_name}</ModalHeader>
                    <ModalBody className="text-center">
                        <div className="products--card-image-holder">
                            <img className="products--card-image card-img-top" src={this.props.modalState.skin_image} alt="Skin"/>
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