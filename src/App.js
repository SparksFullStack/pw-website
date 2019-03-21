import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Showcase from './components/Showcase';
import Ads from './components/Ads';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Showcase />
        <Ads />
      </div>
    );
  }
}

export default App;
