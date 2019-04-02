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
    }

    toggle = () => {
        this.setState({ dropdownOpen: !this.state.dropdownOpen });
    }

    handleRenderOwners = (type) => {
        let listLength = this.props.skinState.owners.length;
        if (type === 'main'){
            return this.props.skinState.owners.map((owner, index) => {
                if (index < listLength && index <= 4){
                    return <ListGroupItem>{owner}</ListGroupItem>
                }
            })
        } else {
            return this.props.skinState.owners.map(owner => {
                return <DropdownItem>{owner}</DropdownItem>
            })
        }
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

                    <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        <DropdownToggle caret>
                            All Previous Owners
                        </DropdownToggle>
                        <DropdownMenu>
                            {this.props.skinState ? this.handleRenderOwners() : ""}
                        </DropdownMenu>
                    </ButtonDropdown>
                </CardBody>
                <CardFooter className="products--card-footer">
                    
                    
                    <Button  onClick={() => this.props.toggleModal('skin')} className="products--buttons" outline>Info</Button>
                    <Button className="products--buttons" color="success">Buy now</Button>
                </CardFooter>
            </Card>
        )
    }
}

export default SkinCard;

/*
http://cdn.steamcommunity.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlY20hPbkI7PYhG5u5cRjiOXE_JbwjGu4ohQ0J3egI4ORcQNqYw3W8la5w-frgJK77ZXKwCQysyVwtnbayxKzhxlIarRum7XAHvqFh2jA=/200fx200f', '★ Karambit | Doppler (Factory New)', 'http://csgo.exchange/item/15653916980', ' https://bitskins.com/view_item?app_id=730&item_id=15492594106', ' Neo', ' Tarik', ' Guardian', ' S1mple', ' JW', ' Summit1G', ' Shroud', ' Pasha', ' DaZeD', ' M0e')
*/