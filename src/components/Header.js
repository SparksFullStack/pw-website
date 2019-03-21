import React, { Component } from 'react';
import "./Header.css";

class Header extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-light fixed-top py-4">
                <div className="container">
                    <a href="#root" className="navbar-brand">
                    <h3 className="d-inline align-middle">Proskins</h3>
                    </a>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a href="#root" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#skins" className="nav-link">Showcase</a>
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