// * TODO
// X Add link to card image
// X Display a set amount of previous users then have the dropdown
// X Add admin login page
// X Add skin adding page
// X Add login functionality
// X Add create skin functionality
// X Add issue JWT functionality
// X Add JWT checking for login status
// X Add real data instead of dummy data
// X Add pagination
// X Add background image for skin
// Add searching/sorting
// Add thumbnails for previous users
// X Shrink Nav on Scroll
// Add delete skins route
// X add standardized height for all images


// * Future Improvements
// Make success message time out when new skin is added
// Add a loading message when first starting the page up
// Add a message when you reach the end of the pagination

// * Cross Browser Compatibility
// Trigger shrinking on Safari and Mobile

import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import AdminLogin from './components/AdminLogin';
import AddSkins from './components/AddSkins';
import axios from 'axios';



class App extends Component {
  state = {
    modalState: {
      isOpen: false,
      modalType: ""
    },
  }

  componentDidMount() {
    axios.get('https://proskins-back.herokuapp.com/skins')
      .then(res => this.setState({ skins: res.data.skins }))
      .catch(err => console.log(err));
  }

  toggleModal = (modalType) => {
      console.log(modalType);
      if (modalType) {
          this.setState({ modalState: { isOpen: !this.state.modalState.isOpen, modalType }});
      } else {
          this.setState({ modalState: { isOpen: !this.state.modalState.isOpen, modalType: "" }});
      }
  }

  render() {
    return (
      <div className="App">
        <Route path='/' exact component={() => <Home toggleModal={this.toggleModal} modalState={this.state.modalState} skins={this.state.skins}/>} />
        <Route path='/login' exact component={AdminLogin} />
        <Route path='/admin' exact component={AddSkins} />
      </div>
    );
  }
}

export default App;
