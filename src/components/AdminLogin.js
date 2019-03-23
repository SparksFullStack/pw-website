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
    Label, 
    Input, 
    Alert
} from 'reactstrap';
import Header from "./Header";
import "./AdminLogin.css";

class AdminLogin extends Component {
    state = {
        username: "",
        password: "",
        redirect: false,
        alertState: {
            isOpen: false,
            text: "default alert text",
        }
    }

    handleInputs = (inputType) => (event) => {
        this.setState({ [inputType]: event.target.value });
    }


    handleLogin = () => {
        const { username, password } = this.state;
        axios.post('https://proskins-back.herokuapp.com/admin/login', { username, password })
            .then(res => {
                localStorage.setItem('JWT', res.data.JWT);
                this.setState({ redirect: true, alertState: { isOpen: true, text: "default alert text"} });
            })
            .catch(err => {
                console.log(err);
                this.setState({ alertState: { isOpen: true, text: "There was an error logging you in--please try again" } });
            })
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
                                    <CardHeader>Login</CardHeader>
                                    <CardBody>
                                        <Alert color="danger" isOpen={this.state.alertState.isOpen}>{this.state.alertState.text}</Alert>
                                        
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
                </Fragment>
            )
        }
    }

    render() {
        return (
            <div>
                
                {this.handleRedirect()}
            </div>
        )
    }
}

export default AdminLogin;