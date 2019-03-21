import React, { Component } from 'react';
import "./Header.css";

class Header extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-light fixed-top py-4">
                <div className="container">
                    <a href="#home" className="navbar-brand">
                    <h3 className="d-inline align-middle">Permwaze</h3>
                    </a>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a href="#home" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#about" className="nav-link">Showcase</a>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
            </header>
            )
        }
}

export default Header;