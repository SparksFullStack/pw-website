import React, { Component } from 'react'
import './Ads.css';

class Ads extends Component {
  render() {
    return (
        <section id="boxes" className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 card--container">
              <div className="card text-center border-secondary mb-resp">
                <div className="card-body">
                  <h3 className="text-primary">Ads go here</h3>
                  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, laudantium?</p>
                </div>
              </div>
            </div>
      
            <div className="col-md-4 card--container">
              <div className="card text-center bg-secondary text-white mb-resp">
                <div className="card-body">
                  <h3>Ads go here</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, laudantium?</p>
                </div>
              </div>
            </div>
      
            <div className="col-md-4">
              <div className="card text-center border-secondary mb-resp">
                <div className="card-body">
                  <h3 className="text-primary">Ads go here</h3>
                  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, laudantium?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}


export default Ads;
