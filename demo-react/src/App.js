import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.add = this.add.bind(this);
  }
  add() {
    this.setState({count: this.state.count + 1});
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <button onClick={this.add}>counter</button>
          <br/>
          <span>{this.state.count}</span>
        </div>
      </div>
    );
  }
}

export default App;
