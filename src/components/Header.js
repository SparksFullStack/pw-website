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
        isOpen: false,
        scrolling: false
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleNavScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleNavScroll);
    }

    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    handleNavScroll = (event) => {
        let scrollTop = document.documentElement.scrollTop;

        if (scrollTop > 15) {
            this.setState({ scrolling: true });
        } else {
            this.setState({ scrolling: false });
        }
        
    }

    handleRenderNavItems = () => {
        if (this.props.page === 'home'){
            return (
                <Nav  className={this.state.scrolling ? 'navbar-main__scrolling ml-auto' : 'ml-auto' } navbar>
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
                        <NavLink href="/login" className="navlink--about">Admin</NavLink>
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
            <header>
                <Navbar id="navbar-main" className={this.state.scrolling ? "fixed-top navbar-main__scrolling header--navbar" : "fixed-top py-4 header--navbar"} color="light" light expand="md">
                    <NavbarBrand >Proskins</NavbarBrand>
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