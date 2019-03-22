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
                    <div class="products--header mb-5">
                        <h1 class="text-primary pb-3">
                            Premium Skins
                        </h1>
                        <p class="lead pb-3">The best skins on the market</p>
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
