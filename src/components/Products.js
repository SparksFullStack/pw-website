import React, { Component } from 'react'
import "./Products.css";
import SkinCard from './SkinCard';
import { 
    Card, 
    CardTitle, 
    CardBody, 
    CardHeader, 
    CardFooter, 
    CardText, 
    Button,
    Spinner,
    Pagination,
    PaginationItem,
    PaginationLink,
    InputGroup,
    Input
} from 'reactstrap';

class Products extends Component {
    state = {
        skinGroups: {},
        currentSkinGroup: 1,
        skinsLoaded: false,
        currentDate: new Date(),
        searchText: ""
    }

    componentDidMount() {
        if (this.props.skins) {
            this.handleSortSkins();
        } 
    }

    handleSortSkins = () => {
        let currentSkinGroup = 1;
        let totalSkins = 0;
        let largestGroup = 1;
        let iterator = 1;
        const skinGroups = {};
        this.props.skins.forEach(skin => {
            totalSkins++;

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

        this.setState({ skinGroups, largestGroup, totalSkins, skinsLoaded: true });
    }

    handleRenderSkins = () => {
        const { skinGroups, currentSkinGroup } = this.state;
        let iterator = 0;
        return skinGroups[currentSkinGroup].map(skin => {
            iterator++;
            return <SkinCard key={skin['owners'] + iterator} toggleModal={this.props.toggleModal} skinState={skin} />
        })
    };

    handleChangeSkinGroup = (increment) => {
        let newSkinGroup;
        let groupSet = false;
        if (increment === '+' && this.state.currentSkinGroup < this.state.largestGroup){
             newSkinGroup = this.state.currentSkinGroup + 1;
             groupSet = true;
        } else if (increment === '-' && this.state.currentSkinGroup > 1) {
            newSkinGroup = this.state.currentSkinGroup - 1;
            groupSet = true;
        }

        if (groupSet) this.setState({ currentSkinGroup: newSkinGroup });
    }


    calculateSkinsFound = () => {
        if (this.state.skinsLoaded) {
            return <h2 className="text-primary pb-3 h1">{this.props.skins.length} Skins Found</h2>
        } else return <h2 className="text-primary pb-3 h1">Skins</h2>
    }

    handleFormatTime = () => {
        if (this.props.time) {
            let shortenedDate = this.props.time.split('T');
            let splitDate = shortenedDate[0].split("-");
            let month = splitDate.splice(1, 2);
            let finalDate = month.concat(splitDate);
            return finalDate.join('-');
        }
    }

    renderLoadingScreen = () => (
        <div className="loading">
            <Spinner type="grow" color="primary" />
            <p class="h3">Loading skins...</p>
        </div>
    )

    handleSearchBar = event => {
        this.setState({ searchText: event.target.value });
    }

  render() {
    return (
        <section id="skins" className="py-5 text-center bg-light">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="products--header">
                            {this.calculateSkinsFound()}
                            <p className="lead pb-3">As of {this.handleFormatTime()}</p>

                            
                        </div>

                        <InputGroup style={{ marginBottom: "30px", maxWidth: "400px", marginLeft: "auto", marginRight: "auto" }} >
                            <Input placeholder="Search skins..." value={this.state.searchText} onChange={this.handleSearchBar} /> 
                        </InputGroup>
                    </div>
                </div>

                <div className="products--cards row">
                    {this.state.skinsLoaded ? this.handleRenderSkins() : this.renderLoadingScreen()}
                </div>  

                <div className="pagination-buttons--container">
                    <Button onClick={() => this.handleChangeSkinGroup('-')} outline color="primary" className="pagination-buttons"><a href="#skins" className="pagination-buttons--link">Previous</a></Button>
                    <Button onClick={() => this.handleChangeSkinGroup('+')} outline color="primary" className="pagination-buttons"><a href="#skins" className="pagination-buttons--link">Next</a></Button>     
                </div> 

            </div>
        </section>
    )
  }
}

export default Products;