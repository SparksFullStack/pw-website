import React, { Component } from 'react'
import "./Products.css";

class Products extends Component {
  render() {
    return (
        <section id="about" className="py-5 text-center bg-light">
            <div className="container">
                <div className="row">
                <div className="col">
                    <div className="info-header mb-5">
                    <h1 className="text-primary pb-3">
                        Why this book?
                    </h1>
                    <p className="lead pb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, nihil?</p>
                    </div>

                    <div id="accordion">
                    <div className="card">
                        <div className="card-header">
                        <h5 className="mb-0">
                            <div href="#collapse1" data-toggle="collapse" data-parent="#accordion">
                            <i className="fas fa-arrow-circle-down"></i> Get Inspired
                            </div>
                        </h5>
                        </div>

                        <div id="collapse1" className="collapse show">
                        <div className="card-body">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla excepturi quisquam praesentium tempore aspernatur aut eum eveniet enim voluptate eligendi ea dolores magni unde facilis saepe, temporibus fugiat nihil aliquid quae alias ratione. Nisi, veniam! Dolorem, et inventore. Unde magni aliquam nobis maiores incidunt. Assumenda quisquam ipsa fuga voluptates rem.
                        </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                        <h5 className="mb-0">
                            <div href="#collapse2" data-toggle="collapse" data-parent="#accordion">
                            <i className="fas fa-arrow-circle-down"></i> Gain the Knowledge
                            </div>
                        </h5>
                        </div>

                        <div id="collapse2" className="collapse">
                        <div className="card-body">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla excepturi quisquam praesentium tempore aspernatur aut eum eveniet enim voluptate eligendi ea dolores magni unde facilis saepe, temporibus fugiat nihil aliquid quae alias ratione. Nisi, veniam! Dolorem, et inventore. Unde magni aliquam nobis maiores incidunt. Assumenda quisquam ipsa fuga voluptates rem.
                        </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                        <h5 className="mb-0">
                            <div href="#collapse3" data-toggle="collapse" data-parent="#accordion">
                            <i className="fas fa-arrow-circle-down"></i> Open Your Mind
                            </div>
                        </h5>
                        </div>

                        <div id="collapse3" className="collapse">
                        <div className="card-body">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla excepturi quisquam praesentium tempore aspernatur aut eum eveniet enim voluptate eligendi ea dolores magni unde facilis saepe, temporibus fugiat nihil aliquid quae alias ratione. Nisi, veniam! Dolorem, et inventore. Unde magni aliquam nobis maiores incidunt. Assumenda quisquam ipsa fuga voluptates rem.
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
  }
}

export default Products;
