import React, { Component } from 'react';
import { Card, CardHeader, CardTitle, CardBody, CardFooter, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Header from "./Header";
import "./AddSkins.css";

class AddSkins extends Component {
    render() {
        return (
            <div>
                <Header page="admin" toggle={this.toggleModal} />
                <section id="addSkins" className="py-5">
                    <div className="primary-overlay">
                        <div className="container addSkins--container">
                            <Card className="addSkins--card">
                                <CardHeader>Login</CardHeader>
                                <CardBody>
                                    <Form>
                                        <FormGroup>
                                            <Label className="col-md-12 text-left p-0">Email</Label>
                                            <Input className="col-md-12" type="email" placeholder="Enter your email..." />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label className="col-md-12 text-left p-0">Password</Label>
                                            <Input type="password" placeholder="Enter your password..." />
                                        </FormGroup>
                                    </Form>
                                </CardBody>

                                <CardFooter>
                                    <Button className="addSkins--button" color="primary" outline>Login</Button>
                                </CardFooter>
                            </Card>
                        </div>
                    

                    </div>
                </section>
            </div>
        )
    }
}

export default AddSkins;