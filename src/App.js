import React, { Component } from 'react';
import Title from './Title';
import Nav from './Nav';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <Nav />
      </div>
    );
  }
}

export default App;
