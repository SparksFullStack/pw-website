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
    DropdownItem
} from 'reactstrap';

class SkinCard extends Component {
    state = {
        dropdownOpen: false,
    }

    toggle = () => {
        this.setState({ dropdownOpen: !this.state.dropdownOpen });
    }

    render() {
        return (

            <Card className="products--card col-md-3">
                <CardHeader>
                    <CardTitle className="products--card-title">Karambit | Doppler (Factory New)</CardTitle>
                </CardHeader>
                <CardImg className="products--card-image" top width="100%" src="http://cdn.steamcommunity.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlY20hPbkI7PYhG5u5cRjiOXE_JbwjGu4ohQ0J3egI4ORcQNqYw3W8la5w-frgJK77ZXKwCQysyVwtnbayxKzhxlIarRum7XAHvqFh2jA=/200fx200f'" alt="Card image cap" />
                <hr />
                <CardBody className="products--card-body">
                    <Button className="products--buttons" color="success">Buy now</Button>
                    <Button onClick={() => this.props.toggleModal('skin')} className="products--buttons" outline>Info</Button>
                </CardBody>
                <CardFooter className="products--card-footer">
                    <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        <DropdownToggle caret>
                            Previous Owners
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>Neo</DropdownItem>
                            <DropdownItem>Tarik</DropdownItem>
                            <DropdownItem>Guardian</DropdownItem>
                            <DropdownItem>S1mple</DropdownItem>
                            <DropdownItem>JW</DropdownItem>
                            <DropdownItem>Summit1G</DropdownItem>
                            <DropdownItem>Shroud</DropdownItem>
                            <DropdownItem>Pasha</DropdownItem>
                            <DropdownItem>DaZeD</DropdownItem>
                            <DropdownItem>M0e</DropdownItem>
                        </DropdownMenu>
                    </ButtonDropdown>
                    
                </CardFooter>
            </Card>
        )
    }
}

export default SkinCard;

/*
http://cdn.steamcommunity.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlY20hPbkI7PYhG5u5cRjiOXE_JbwjGu4ohQ0J3egI4ORcQNqYw3W8la5w-frgJK77ZXKwCQysyVwtnbayxKzhxlIarRum7XAHvqFh2jA=/200fx200f', '★ Karambit | Doppler (Factory New)', 'http://csgo.exchange/item/15653916980', ' https://bitskins.com/view_item?app_id=730&item_id=15492594106', ' Neo', ' Tarik', ' Guardian', ' S1mple', ' JW', ' Summit1G', ' Shroud', ' Pasha', ' DaZeD', ' M0e')
*/