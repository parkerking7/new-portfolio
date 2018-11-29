import React, { Component } from 'react';
import '../assets/scss/App.scss';
import Paralax from './paralax/Paralax';
import Navbar from './navbar/Navbar';
import Home from './home/Home';
import Skills from './skills/Skills';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-body">
          <Paralax />
          <div className="full-page">
            <Navbar />
            <Home />
          </div>
          <Skills />
        </div>
      </div>
    );
  }
}

export default App;
