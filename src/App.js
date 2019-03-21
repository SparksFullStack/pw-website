import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Showcase from './components/Showcase';
import Ads from './components/Ads';
import Products from './components/Products';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Showcase />
        <Ads />
        <Products />
      </div>
    );
  }
}

export default App;
