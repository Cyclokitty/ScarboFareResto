import React, { Component } from 'react';
import Title from './Title';
import Nav from './Nav';
import Messages from './Messages';
import data from './data';
import './App.css';

class App extends Component {
  state = {
    data: data
  };
  render() {
    return (
      <div className="App">
        <Title />
        <div className='NavAndMessages'>
          <Nav />
          <Messages data={this.state.data} />
        </div>
      </div>
    );
  }
}

export default App;
