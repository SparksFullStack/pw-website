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
        scrolling: true
    }

    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    handleNavScroll = () => {
        this.setState({ scrolling: !this.state.scrolling });
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

    handleScrolling = () => {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.getElementById("navbar-main").style.padding = "1rem";
            // document.getElementById("logo").style.fontSize = "25px";
          } else {
            document.getElementById("navbar").style.padding = "80px 10px";
            document.getElementById("logo").style.fontSize = "35px";
          }
    }

    render() {
        return (
            <header>
                <Navbar id="navbar-main" className={this.state.scrolling ? "fixed-top navbar-main__scrolling header--navbar" : "fixed-top py-4 header--navbar"} color="light" light expand="md">
                    <NavbarBrand onClick={this.handleNavScroll}>Proskins</NavbarBrand>
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