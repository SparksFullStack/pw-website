import React, { Component } from 'react'
import "./Products.css";
import SkinCard from './SkinCard';
import { Card, CardTitle, CardBody, CardHeader, CardFooter, CardText, Button } from 'reactstrap';

class Products extends Component {
  render() {
    return (
        <section id="about" className="py-5 text-center bg-light">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="info-header mb-5">
                        <h1 className="pb-3 products--header">
                            Skins
                        </h1>
                        </div>
                    </div>
                </div>

                <div className="row products--cards row">
                    <SkinCard />
                    <SkinCard />
                    <SkinCard />
                </div>  

                <div className="row products--cards row">
                    <SkinCard />
                    <SkinCard />
                    <SkinCard />
                </div>
            </div>
        </section>
    )
  }
}

export default Products;
