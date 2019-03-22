import React, { Component } from 'react';
import "./Header.css";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

class Header extends Component {
    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    handleRenderNavItems = () => {
        if (this.props.page === 'home'){
            return (
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="#root">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#skins">Skins</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="navlink--about" onClick={() => this.props.toggle('about')}>About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/add_skins" className="navlink--about">Admin</NavLink>
                    </NavItem>
                </Nav>
            )
        } else if (this.props.page === 'admin') {
            return (
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/">Home</NavLink>
                    </NavItem>
                </Nav>
            )
        }
    }

    render() {
        return (
            <header className="container">
                <Navbar id="navbar-main" className="fixed-top py-4 header--navbar" color="light" light expand="md">
                    <NavbarBrand href="/">Proskins</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        {this.handleRenderNavItems()}
                    </Collapse>
                </Navbar>
            </header>
            )
        }
}

export default Header;