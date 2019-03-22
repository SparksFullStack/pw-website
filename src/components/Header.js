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
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem 
} from 'reactstrap';

class Header extends Component {
    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <header className="container">
                <Navbar id="navbar-main" className="fixed-top py-4 header--navbar" color="light" light expand="md">
                    <NavbarBrand href="/">Proskins</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="#root">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#skins">Skins</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="navlink--about" onClick={this.props.toggle}>About</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </header>
            )
        }
}

export default Header;