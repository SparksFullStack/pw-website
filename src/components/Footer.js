import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer  id="main-footer" className="py-3 text-white bg-dark">
                <div className="container">
                    <div className="row text-center">
                    <div className="col-md-6 ml-auto">
                        <p style={{marginTop: '10px'}}>
                            Copyright &copy; <span style={{fontSize: '1.2em'}}>Permwaze</span> 2019
                        </p>
                    </div>
                    <div className="col-md-6 ml-auto">
                        <p style={{marginTop: '10px'}}>
                            Website by <a style={{ color: '#fff', fontSize: '1.2em' }} href='http://sparksfullstack.io'>Sparks Full-Stack</a>
                        </p>
                    </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;