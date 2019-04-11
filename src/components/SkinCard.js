import React, { Component, Fragment } from 'react';
import "./SkinCard.css";
import { 
    Card, 
    CardImg, 
    Progress, 
    CardBody,
    CardTitle, 
    Button,
    CardHeader,
    CardFooter,
    ButtonDropdown, 
    DropdownToggle, 
    DropdownMenu, 
    DropdownItem,
    ListGroup,
    ListGroupItem
} from 'reactstrap';

class SkinCard extends Component {
    state = {
        dropdownOpen: false,
        ownerListLength: 0,
    }

    toggle = () => {
        this.setState({ dropdownOpen: !this.state.dropdownOpen });
    }

    handleRenderOwners = (type) => {;
        const ownerList = this.props.skinState['owners'].split(" ");
        const listLength = ownerList.length
        if (type === 'main'){
            return ownerList.map((owner, index) => {
                if (index < listLength && index < 5 && owner !== ""){
                    return <ListGroupItem key={owner}>{owner}</ListGroupItem>
                }
            })
        } else if (listLength > 5) {
            return (
                <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret>
                        All Previous Owners
                    </DropdownToggle>
                    <DropdownMenu>
                        {this.handleRenderDropDown(ownerList)}
                    </DropdownMenu>
                </ButtonDropdown>
            )
            
        }
    }

    handleRenderDropDown = (ownerList) => {
        return ownerList.map(owner => {
            return <DropdownItem key={owner}>{owner}</DropdownItem>
        })
    }

    handleImageError = () => {
        alert('there was an error');
    }

    handleRenderStatTrak = () => {
        if (this.props.skinState["stat_trak"] === "True") {
            return (
                <div className="stat-trak--container">
                    <img className="stat-trak--img" src={require('../resources/stat-trak-icon.png')} alt="This skin comes with Stat-Trak!" />
                </div>
            )
        } else return <Fragment></Fragment>;
    }

    render() {
        return (
            <Card className="products--card col-lg-3 col-md-5 col-sm-8 col-xs-8 ">
                <CardHeader>
                    <CardTitle className="products--card-title">{this.props.skinState['skin_name']}</CardTitle>
                </CardHeader>
                <div className="products--card-image-holder">
                    <div className="price--container">
                        <span style={{fontWeight: "bold"}} className="text-white h6">{this.props.skinState["price"]}</span>
                    </div>
                    {this.handleRenderStatTrak()}
                    
                    <CardImg onClick={() => this.props.toggleModal('skin', this.props.skinState)} className="products--card-image" top width="100%" src={this.props.skinState['skin_image']} alt="Card image cap" />
                </div>

                <CardBody className="products--card-body">
                    {/* <div className="wear-container">
                        <span>Wear: {this.props.skinState["wear"]}</span>
                    </div> */}

                    <div className="progressbar">
                        <i className="fas fa-arrow-down progressbar--marker"></i>
                        
                        <div className="progressbar--container">
                            <Progress multi>
                                <Progress bar color="success" value="15" />
                                <Progress bar value="15" />
                                <Progress bar color="info" value="23" />
                                <Progress bar color="warning" value="7" />
                                <Progress bar color="danger" value="55" />
                                {/* <span className="progressbar--marker">|</span> */}
                            </Progress>
                        </div>
                    </div>

                    <h6 className="products--card-body--header text-secondary">Previous Owners</h6>
                    
                    <ListGroup className="products--card-list">
                        {this.props.skinState ? this.handleRenderOwners('main') : ""}
                    </ListGroup>

                    {this.props.skinState ? this.handleRenderOwners() : ""}
                </CardBody>
                <CardFooter className="products--card-footer">
                    
                    
                    <Button onClick={() => this.props.toggleModal('skin', this.props.skinState)} className="products--buttons" outline>Info</Button>
                    <Button className="products--buttons" color="success">Buy now</Button>
                </CardFooter>
            </Card>
        )
    }
}

export default SkinCard;