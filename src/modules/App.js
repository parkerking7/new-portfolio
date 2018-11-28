import React, { Component } from 'react';
import './scss/App.scss';

import Navbar from './navbar/Navbar';
import Home from './home/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-body">
          <Navbar />
          <Home />
        </div>
      </div>
    );
  }
}

export default App;
