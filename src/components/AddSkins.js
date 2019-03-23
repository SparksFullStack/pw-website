import React, { Component, Fragment } from 'react';
import axios from 'axios';
import jsonwebtoken from 'jsonwebtoken';
import { Redirect } from 'react-router-dom';
import { 
    Card, 
    CardHeader,
    CardTitle, 
    CardBody, 
    CardFooter, 
    Button, 
    Form, 
    FormGroup, 
    FormText,
    Label, 
    Input, 
    Alert
} from 'reactstrap';
import "./AddSkins.css";

import Header from './Header';

class AddSkins extends Component {
    state = {
        
        skinState: {
            skin_image: "",
            skin_name: "",
            skin_link: "",
            buy_link: "",
            owners: ['asdf', "fdas"],
            tempOwner: "",
        },
        redirect: false,
        alertState: {
            isOpen: false,
            text: "default alert text",
        }
    }

    componentWillMount() {
        let token = localStorage.getItem('JWT');
        if (!token || !jsonwebtoken.verify(token, process.env.REACT_APP_JWT_SECRET)){
            this.setState({ redirect: true });
        }
    }

    handleSkinState = (inputType) => (event) => {
        const newSkinState = Object.assign({}, this.state.skinState);
        newSkinState[inputType] = event.target.value; 

        this.setState({ skinState: newSkinState });
    }

    handleAlertState = (alertText) => {
        const newAlertState = Object.assign({}, this.state.alertState);
        newAlertState.isOpen = true;
        newAlertState.text = alertText;
        this.setState({ alertState: newAlertState });
    }

    handleRenderOwners = () => {
        return this.state.skinState.owners.map(owner => {
            return <span>{owner}, </span>
        });
    }

    handleAddOwner = (event) => {
        event.preventDefault();
        const newOwnersArray = this.state.skinState.owners.concat(this.state.skinState.tempOwner);
        const newSkinState = Object.assign({}, this.state.skinState);
        newSkinState.owners = newOwnersArray;
        newSkinState.tempOwner = "";
        this.setState({ skinState: newSkinState });
    }

    handleRedirect = () => {
        if (this.state.redirect) {
            return (
                <Redirect to='/login' />
            )
        } else {
            return (
                <Fragment>
                    <Header page="admin" toggle={this.toggleModal} />
                    <section id="adminLogin" className="py-5">
                        <div className="primary-overlay">
                            <div className="container adminLogin--container">
                                <Card className="adminLogin--card">
                                    <CardHeader>Add a Skin</CardHeader>
                                    <CardBody>
                                        <Alert color="danger" isOpen={this.state.alertState.isOpen}>{this.state.alertState.text}</Alert>
                                        
                                        <Form onSubmit={this.handleLogin}>
                                            <FormGroup>
                                                <Label className="col-md-12 text-left p-0">Skin Image</Label>
                                                <Input onChange={this.handleSkinState('skin_image')} value={this.state.skinState.skin_image} className="col-md-12" type="text" placeholder="Enter the image's URL..." />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label className="col-md-12 text-left p-0">Skin Name</Label>
                                                <Input onChange={this.handleSkinState('skin_name')} value={this.state.skinState.skin_name} className="col-md-12" type="text" placeholder="Enter the skin's name" />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label className="col-md-12 text-left p-0">Skin Link</Label>
                                                <Input onChange={this.handleSkinState('skin_link')} value={this.state.skinState.skin_link} type="text" placeholder="Enter the skin's URL..." />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label className="col-md-12 text-left p-0">Buy Link</Label>
                                                <Input onChange={this.handleSkinState('buy_link')} value={this.state.skinState.buy_link} type="text" placeholder="Enter the purchase link..." />
                                            </FormGroup>
                                            <FormGroup style={{ marginBottom: 0 }}>
                                                <Label style={{ marginBottom: 0 }} className="col-md-12 text-left p-0">Previous Owners</Label>
                                                <FormText style={{ textAlign: 'left'}}>Owners added: {this.handleRenderOwners()}</FormText>
                                                <Input onChange={this.handleSkinState('tempOwner')} value={this.state.skinState.tempOwner} className="col-md-12" type="text" placeholder="Enter the owners..." />
                                                <Button type="button" onClick={this.handleAddOwner} outline style={{ width: '100%', marginTop: '10px' }} color="primary">Add Owner</Button>
                                                <FormText>Please add owners one at a time</FormText>
                                            </FormGroup>
                                        </Form>
                                    </CardBody>

                                    <CardFooter>
                                        <Button onClick={this.handleLogin} className="adminLogin--button" color="success" outline>Add Skin</Button>
                                    </CardFooter>
                                </Card>
                            </div>
                        </div>
                    </section>
                </Fragment>
            )
        }
    }
    render() {
        return (
            <div className="addSkins">
                {this.handleRedirect()}
            </div>
        )
    }
}

export default AddSkins;