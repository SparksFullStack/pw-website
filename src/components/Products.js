import React, { Component } from 'react'
import "./Products.css";
import SkinCard from './SkinCard';
import { Card, CardTitle, CardBody, CardHeader, CardFooter, CardText, Button,
    Pagination,
    PaginationItem,
    PaginationLink
} from 'reactstrap';

class Products extends Component {

    state = {
        skinGroups: {},
        currentSkinGroup: 1,
        skinsLoaded: false,
        largestGroup: 1
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
        let largestGroup = 1;
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
                largestGroup++;
                iterator = 1;
            } else iterator++;
        });

        this.setState({ skinGroups, largestGroup }, () => console.log(this.state));
    }

    handleRenderSkins = () => {
        const { skinGroups, currentSkinGroup } = this.state;
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

                <div className="pagination-buttons--container">
                    <Button onClick={() => this.handleChangeSkinGroup('-')} outline color="primary" className="pagination-buttons">Previous</Button>
                    <Button onClick={() => this.handleChangeSkinGroup('+')} outline color="primary" className="pagination-buttons">Next</Button>     
                </div>

            </div>
        </section>
    )
  }
}

export default Products;
