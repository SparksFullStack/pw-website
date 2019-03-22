import React, { Component } from 'react';
import "./AddSkins.css";

class AddSkins extends Component {
    render() {
        return (
            <section id="addSkins" className="py-5">
                <div className="primary-overlay text-white">
                    <div className="container">
                    <div className="row text-center">
                        <div className="col-lg-6 ml-auto mr-auto text-center addSkins--main-container">
                        <h1 className="display-3 mt-5 pt-5">
                            Proskins
                        </h1>
                        <p className="lead">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem fuga quibusdam necessitatibus corrupti dolorem id!
                        </p>
                        <a href="#skins" className="btn btn-outline-secondary btn-lg text-white">
                            <i className="fas fa-arrow-right"></i><span> View Skins</span>
                        </a>
                        </div>
                        
                    </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default AddSkins;