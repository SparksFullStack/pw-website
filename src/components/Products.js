import React, { Component } from 'react'
import "./Products.css";
import SkinCard from './SkinCard';
import { Card, CardTitle, CardBody, CardHeader, CardFooter, CardText, Button } from 'reactstrap';

class Products extends Component {
  render() {
    return (
        <section id="skins" className="py-5 text-center bg-light">
            <div className="container">
                <div className="row">
                    <div className="col">
                    <div className="products--header mb-5">
                        <h1 className="text-primary pb-3">
                            Premium Skins
                        </h1>
                        <p className="lead pb-3">The best skins on the market</p>
                        </div>
                    </div>
                </div>

                <div className="row products--cards row">
                    <SkinCard toggleModal={this.props.toggleModal} />
                    <SkinCard toggleModal={this.props.toggleModal} />
                    <SkinCard toggleModal={this.props.toggleModal} />
                </div>  

                <div className="row products--cards row">
                    <SkinCard toggleModal={this.props.toggleModal} />
                    <SkinCard toggleModal={this.props.toggleModal} />
                    <SkinCard toggleModal={this.props.toggleModal} />
                </div>
            </div>
        </section>
    )
  }
}

export default Products;
