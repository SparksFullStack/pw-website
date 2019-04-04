import React, { Component } from 'react';
import "./SkinCard.css";
import { 
    Card, 
    CardImg, 
    CardText, 
    CardBody,
    CardTitle, 
    CardSubtitle, 
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
                if (index < listLength && index <= 4){
                    return <ListGroupItem key={owner}>{owner}</ListGroupItem>
                }
            })
        } else if (listLength > 4) {
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

    render() {
        return (
            <Card className="products--card col-lg-3 col-md-5 col-sm-8 col-xs-8 ">
                <CardHeader>
                    <CardTitle className="products--card-title">{this.props.skinState['skin_name']}</CardTitle>
                </CardHeader>
                <div className="products--card-image-holder">
                    <CardImg onClick={() => this.props.toggleModal('skin')} className="products--card-image" top width="100%" src={this.props.skinState['skin_image']} alt="Card image cap" />
                </div>

                <CardBody className="products--card-body">
                    <h6 className="products--card-body--header text-secondary">Previous Owners</h6>
                    
                    <ListGroup className="products--card-list">
                        {this.props.skinState ? this.handleRenderOwners('main') : ""}
                    </ListGroup>

                    {this.props.skinState ? this.handleRenderOwners() : ""}
                </CardBody>
                <CardFooter className="products--card-footer">
                    
                    
                    <Button  onClick={() => this.props.toggleModal('skin', this.props.skinState)} className="products--buttons" outline>Info</Button>
                    <Button className="products--buttons" color="success">Buy now</Button>
                </CardFooter>
            </Card>
        )
    }
}

export default SkinCard;