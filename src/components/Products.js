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
        currentDate: new Date(),
    }

    componentDidMount() {
        if (this.props.skins) {
            this.handleSortSkins();
            this.setState({ skinsLoaded: true });
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

        this.setState({ skinGroups, largestGroup, totalSkins });
    }

    handleRenderSkins = () => {
        const { skinGroups, currentSkinGroup } = this.state;
        return skinGroups[currentSkinGroup].map(skin => {
            return <SkinCard key={skin['owners']} toggleModal={this.props.toggleModal} skinState={skin} />
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
        let totalSkins = 0;
        if (this.state.skinsLoaded) {
            totalSkins = (this.state.largestGroup * 6);
            return 
        } else return <h2 className="text-primary pb-3 h1">Skins</h2>
    }

    handleFormatTime = () => {
        // if (this.props.time) {
        //     let date = new Date(this.props.time);
        //     let day = date.getDay();
        //     let splitDay = day.toString().split("");
        //     if (splitDay.length === 1) {
        //         splitDay.unshift('0');
        //         splitDay = splitDay.map(num => num);
        //     }
        //     let finalDay = parseInt(splitDay.join(''));
        //     let month = date.getMonth();
        //     let year = date.getFullYear();
        //     console.log(`${month} ${finalDay} ${year}`);
        // }

        if (this.props.time) {

            let shortenedDate = this.props.time.split('T');
            let splitDate = shortenedDate[0].split("-");
            let month = splitDate.splice(1, 2);
            let finalDate = month.concat(splitDate);
            return finalDate.join('-');
        }

        
    }

  render() {
    return (
        <section id="skins" className="py-5 text-center bg-light">
            <div className="container">
                <div className="row">
                    <div className="col">
                    <div className="products--header mb-5">
                    <h2 className="text-primary pb-3 h1">{this.state.totalSkins} Skins Found</h2>
                        <p className="lead pb-3">As of {this.handleFormatTime()}</p>
                        </div>
                    </div>
                </div>

                <div className="products--cards row">
                    {this.state.skinsLoaded ? this.handleRenderSkins() : <p>Loading skins...</p>}
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