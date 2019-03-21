import React, { Component } from 'react'
import "./Products.css";
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
                    <Card className="products--card col-md-4">
                        <CardHeader>
                            <CardTitle>Skins go here</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <CardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, laudantium?</CardText>
                        </CardBody>
                        <CardFooter>
                            <Button color="primary">Buy now</Button>
                            <Button outline>More information</Button>
                        </CardFooter>
                    </Card>

                    <Card className="products--card col-md-4">
                        <CardHeader>
                            <CardTitle>Skins go here</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <CardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, laudantium?</CardText>
                        </CardBody>
                        <CardFooter>
                            <Button color="primary">Buy now</Button>
                            <Button outline>More information</Button>
                        </CardFooter>
                    </Card>

                    <Card className="products--card col-md-4">
                        <CardHeader>
                            <CardTitle>Skins go here</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <CardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, laudantium?</CardText>
                        </CardBody>
                        <CardFooter>
                            <Button color="primary">Buy now</Button>
                            <Button outline>More information</Button>
                        </CardFooter>
                    </Card>
                </div>  

                <div className="row products--cards row">
                    <Card className="products--card col-md-4">
                        <CardHeader>
                            <CardTitle>Skins go here</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <CardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, laudantium?</CardText>
                        </CardBody>
                        <CardFooter>
                            <Button color="primary">Buy now</Button>
                            <Button outline>More information</Button>
                        </CardFooter>
                    </Card>

                    <Card className="products--card col-md-4">
                        <CardHeader>
                            <CardTitle>Skins go here</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <CardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, laudantium?</CardText>
                        </CardBody>
                        <CardFooter>
                            <Button color="primary">Buy now</Button>
                            <Button outline>More information</Button>
                        </CardFooter>
                    </Card>

                    <Card className="products--card col-md-4">
                        <CardHeader>
                            <CardTitle>Skins go here</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <CardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, laudantium?</CardText>
                        </CardBody>
                        <CardFooter>
                            <Button color="primary">Buy now</Button>
                            <Button outline>More information</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
    )
  }
}

export default Products;
