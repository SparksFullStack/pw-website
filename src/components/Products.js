import React, { Component } from 'react'
import "./Products.css";
import SkinCard from './SkinCard';
import { Card, CardTitle, CardBody, CardHeader, CardFooter, CardText, Button } from 'reactstrap';

class Products extends Component {

    state = {
        skinGroups: {},
        currentSkinGroup: 1,
        skinsLoaded: false,
    }

    componentDidMount() {
        if (this.props.skins) {
            this.handleSortSkins();
            this.setState({ skinsLoaded: true });
        } else {
            console.log('skins loading');
        }
    }

    handleSortSkins = () => {
        let currentSkinGroup = 1;
        let iterator = 1;
        const skinGroups = {};
        this.props.skins.forEach(skin => {
            if (skinGroups[currentSkinGroup]) {
                skinGroups[currentSkinGroup].push(skin);
            } else {
                skinGroups[currentSkinGroup] = [skin];
            }

            if (iterator === 6) {
                currentSkinGroup++;
                iterator = 1;
            } else iterator++;
        });

        this.setState({ skinGroups }, () => console.log(this.state.skinGroups));
    }

    handleRenderSkins = () => {
        const { skinGroups, currentSkinGroup } = this.state;
        console.log(skinGroups[currentSkinGroup])
        return skinGroups[currentSkinGroup].map(skin => {
            return <SkinCard skinState={skin} />
        })
    };

    handleChangeSkinGroup = (increment) => {
        let newSkinGroup;
        if (increment === '+' && this.state.currentSkinGroup < 2){
             newSkinGroup = this.state.currentSkinGroup + 1;
        } else if (increment === '-' && this.state.currentSkinGroup > 1) {
            newSkinGroup = this.state.currentSkinGroup - 1;
        }

        this.setState({ currentSkinGroup: newSkinGroup });
    }



  render() {
    return (
        <section id="skins" className="py-5 text-center bg-light">
            <div className="container">
                <div className="row">
                    <div className="col">
                    <div className="products--header mb-5">
                        <h2 className="text-primary pb-3 h1">
                            Premium Skins
                        </h2>
                        <p className="lead pb-3">The best skins on the market</p>
                        </div>
                    </div>
                </div>

                <div className="row products--cards row">
                    {this.state.skinsLoaded ? this.handleRenderSkins() : <p>Loading skins...</p>}
                </div>  
                <Button onClick={() => this.handleChangeSkinGroup('+')}>Pagination</Button>
            </div>
        </section>
    )
  }
}

export default Products;
