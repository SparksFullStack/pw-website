import React, { Component } from 'react';
import axios from 'axios';
import { Card, CardHeader, CardTitle, CardBody, CardFooter, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Header from "./Header";
import "./AdminLogin.css";

class AdminLogin extends Component {
    state = {
        username: "",
        password: "",
    }

    handleInputs = (inputType) => (event) => {
        this.setState({ [inputType]: event.target.value });
    }


    handleLogin = () => {
        const { username, password } = this.state;
        axios.post('http://localhost:3001/admin/login', { username, password })
            .then(res => {
                localStorage.setItem('JWT', res.data.JWT);
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return (
            <div>
                <Header page="admin" toggle={this.toggleModal} />
                <section id="adminLogin" className="py-5">
                    <div className="primary-overlay">
                        <div className="container adminLogin--container">
                            <Card className="adminLogin--card">
                                <CardHeader>Login</CardHeader>
                                <CardBody>
                                    <Form onSubmit={this.handleLogin}>
                                        <FormGroup>
                                            <Label className="col-md-12 text-left p-0">username</Label>
                                            <Input onChange={this.handleInputs('username')} value={this.state.username} className="col-md-12" type="username" placeholder="Enter your username..." />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label className="col-md-12 text-left p-0">Password</Label>
                                            <Input onChange={this.handleInputs('password')} value={this.state.password} type="password" placeholder="Enter your password..." />
                                        </FormGroup>
                                    </Form>
                                </CardBody>

                                <CardFooter>
                                    <Button onClick={this.handleLogin} className="adminLogin--button" color="primary" outline>Login</Button>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default AdminLogin;