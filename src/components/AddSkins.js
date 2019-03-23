import React, { Component, Fragment } from 'react';
import axios from 'axios';
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
            owners: [],
        },
        redirect: false,
        alertState: {
            isOpen: false,
            text: "default alert text",
        }
    }

    handleSkinState = (inputType) => (event) => {
        const newSkinState = Object.assign({}, this.state.skinState);
        if (inputType !== 'owners') {
            newSkinState[inputType] = event.target.value;
        } else {
            newSkinState.owners.push(event.target.value);
        }

        this.setState({ skinState: newSkinState });
    }

    handleAlertState = (alertText) => {
        const newAlertState = Object.assign({}, this.state.alertState);
        newAlertState.isOpen = true;
        newAlertState.text = alertText;
        this.setState({ alertState: newAlertState });
    }

    handleRedirect = () => {
        if (this.state.redirect) {
            return (
                <Redirect to='/admin' />
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
                                                <Input onChange={this.handleSkinState('skin_image')} value={this.state.username} className="col-md-12" type="username" placeholder="Enter the image's URL..." />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label className="col-md-12 text-left p-0">Skin Name</Label>
                                                <Input onChange={this.handleSkinState('skin_name')} value={this.state.username} className="col-md-12" type="username" placeholder="Enter the skin's name" />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label className="col-md-12 text-left p-0">Skin Link</Label>
                                                <Input onChange={this.handleSkinState('skin_link')} value={this.state.password} type="password" placeholder="Enter the skin's URL..." />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label className="col-md-12 text-left p-0">Buy Link</Label>
                                                <Input onChange={this.handleSkinState('buy_link')} value={this.state.password} type="password" placeholder="Enter the purchase link..." />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label className="col-md-12 text-left p-0">Previous Owners</Label>
                                                <Input onChange={this.handleSkinState('username')} value={this.state.username} className="col-md-12" type="username" placeholder="Enter the owners..." />
                                                <FormText>The owners should each be seperated by a comma and a space like: "owner1, owner2, owner3, etc."</FormText>
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