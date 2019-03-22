// * TODO
// Add link to card image
// Display a set amount of previous users then have the dropdown
// Add admin login modal
// Add skin adding modal

import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact component={Home} />
      </div>
    );
  }
}

export default App;
