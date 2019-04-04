// * TODO
// Pass modal state when clicking on a skin
// Handle differing image sizes
// Get most recent update from the database


// * Future Improvements
// Make success message time out when new skin is added
// Add a loading message when first starting the page up
// Add a message when you reach the end of the pagination

// * Cross Browser Compatibility
// Trigger shrinking on Safari and Mobile

// * Optional
// Image scaling up for showcase
// Add thumbnails for previous users

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
    this.getSkins();
    this.getTime();
  };

  getSkins = () => {
    axios.get('http://localhost:3001/skins')
      .then(res => {
        this.setState({ skins: res.data });
      })
      .catch(err => console.log(err));
  }

  getTime = () => {
    axios.get('http://localhost:3001/last_updated')
      .then(res => {
        if (!res.data[0].Update_time) {
          this.setState({ time: res.data[0].Create_time });
        } else {
          this.setState({ time: res.data[0].Update_time });
        }
      })
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
        <Route path='/' exact component={() => <Home toggleModal={this.toggleModal} modalState={this.state.modalState} skins={this.state.skins} time={this.state.time}/>} />
        <Route path='/login' exact component={AdminLogin} />
        <Route path='/admin' exact component={AddSkins} />
      </div>
    );
  }
}

export default App;
